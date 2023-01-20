const e = require("express");
const { User, Cart, Productcart, Payment, Orderdetail} = require("../db");
var mercadopago = require('mercadopago');



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

     
      
 
          res.send(payment)
    } catch (err) {
        console.log(err)
    }
}


module.exports = { addPayment }