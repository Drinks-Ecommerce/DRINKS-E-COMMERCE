const { User, Cart, Productcart, Payment, Orderdetail} = require("../db");
var mercadopago = require('mercadopago');


const addPayment = async(req, res) => {
    try {
        const {emailUser, paymentMethod, shippingMethod, address, numberAddress, city, province, postalCode, phone} = req.body;
        const user = await User.findOne({
            include: [
                {
                    model: Cart,
                    include:[{model: Productcart}]
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
            userId:user.id
        })
     
        await user.cart.productcarts.map((el)=>{
            Orderdetail.create({
                quantity: el.quantity,
                price: el.totalValue,
                paymentId: payment.id,
                productId: el.productId,
                img:el.img,
                name:el.name
            })
        })
       /*  let preference = {
            items: [],
            notification_url: "https://433d-186-183-64-128.sa.ngrok.io/notificationOrder"
        }
        mercadopago.configure({
            access_token: 'TEST-4012101398950150-011321-7d4eec3fae82c46fb761d5ddd109731a-1286736524'
        });
        if(Array.isArray(order)){
            for(let i =0; i<order.length;i++){
                preference.items.push({
                    title: order.name[i],
                    img:order.img[i],
                    quantity: parseInt(order.quantity[i]),
                    currency_id: 'ARS',
                    total_price: parseInt(order.price[i]),
                })
            } 
        }else{
            preference.items.push({
                title: order.name,
                picture_url: order.img,
                unit_price: parseInt(order.price),
                quantity: parseInt(order.quantity),
              });  
        }
        mercadopago.preferences
        .create(preference)
        .then((r) => {
                res.json(r.response.init_point)
            })
            .catch((e) => {
                console.log(e)
            }) */

            res.send(payment)
    } catch (err) {
        console.log(err)
    }
}


module.exports = { addPayment}