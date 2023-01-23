const e = require("express");
const { User, Cart, Productcart, Payment, Orderdetail, Products} = require("../db");
var mercadopago = require('mercadopago');
const {transporter} = require("../routes/authRouter/config/emailer")
const Product = require("../models/Product");




const addPayment = async (req, res) => {
    try {
        const { emailUser, paymentMethod, shippingMethod, address, numberAddress, city, province, postalCode, phone } = req.body;
        const user = await User.findOne({
            include: [
                {
                    model: Cart,
                    include: [{ model: Productcart }]
                }
            ],
            where: {
                email: emailUser
            }
        })

        const payment = await Payment.create({
            state: 'created',
            total: user.cart.total,
            address: address,
            numberAddress: numberAddress,
            city: city,
            province: province,
            postalCode: postalCode,
            phone: phone,
            paymentMethod: paymentMethod,
            shippingMethod: shippingMethod,
            userId: user.id
        })

    
        await user.cart.productcarts.map((el)=>{
            Orderdetail.create({
                quantity: el.quantity,
                price: el.totalValue,
                paymentId: payment.id,
                productId: el.productId,
                img: el.img,
                name: el.name
            })
        })

        let order = await user.cart.productcarts.map((el)=>{
            return{
                quantity: el.quantity,
                rice: el.totalValue,
                paymentId: payment.id,
                productId: el.productId,
                img:el.img,
                name:el.name,
                priceProduct:el.priceProduct
            }
        })
        //cambio en el stock
        for(let i =0; i< order.length; i++){
            let cant = order[i].quantity;
            let prod = order[i].productId;
            let currentProduct = await Products.findOne({
                where: {id: prod } 
            })
            await Products.update(
                {stock: currentProduct.stock - cant},
                {where: { id: order[i].productId}}
                )
        }



        let preference = {
            items: [],
            notification_url: "https://433d-186-183-64-128.sa.ngrok.io/notificationOrder"
        };
        mercadopago.configure({
            access_token: 'TEST-4012101398950150-011321-7d4eec3fae82c46fb761d5ddd109731a-1286736524'
        });
        if(Array.isArray(order)){
            for(let i =0; i<order.length;i++){
                preference.items.push({
                    title: order[i].name,
                    picture_url: order[i].img,
                    unit_price:parseInt(order[i].priceProduct),
                    quantity:order[i].quantity,
                })
            } 
        }else{
            preference.items.push({
                title: order.name,
                picture_url: order.picture_url,
                unit_price:parseInt(order.price),
                quantity:order.quantity,
              });  
        }

        await transporter.sendMail({
            from: '"Vinario Drinks" <vinario.drinks@gmail.com>', // sender address
            to: emailUser, // list of receivers
            subject: "Compra realizada!", // Subject line
            html: `<h4>Hola!</h4>
                    <p>Queriamos agradecerte por confiar en nosotros al ralizar tu compra, esperamos que lo disfrutes <3  <br>
                    <br>Vinario Drinks Team.<br>
                    <p/>`, // html body
          });
        mercadopago.preferences
        .create(preference)
        .then(function (response) {
        res.send(response.response.init_point);
        /*  res.redirect(response.response.init_point); */
        })
        .catch(function (error) {
        console.log(error);

        
    });
    } catch (err) {
        console.log(err)
    }
}



module.exports = { addPayment }