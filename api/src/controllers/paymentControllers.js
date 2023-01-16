const e = require("express");
const { User, Cart, Productcart, Payment, Orderdetail } = require("../db");


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

        user.cart.productcarts.map(async function (el) {
            Orderdetail.create({
                quantity: el.quantity,
                price: el.totalValue,
                paymentId: payment.id,
                productId: el.productId,
                img: el.img,
                name: el.name
            })
        })

        mercadopago.configure({
            access_token: 'TEST-4012101398950150-011321-7d4eec3fae82c46fb761d5ddd109731a-1286736524'
        });

        var preference = {
            items: [
                {
                    title: Orderdetail.productId,
                    quantity: Orderdetail.quantity,
                    currency_id: 'ARS',
                    unit_price: Orderdetail.price
                }
            ],
            notification_url: "https://35db-186-183-68-203.eu.ngrok.io/notificationOrder"
        };

        mercadopago.preferences.create(preference)
            .then((r) => {
                res.json(r)
            })
            .catch((e) => {
                console.log(e)
            })



        res.send(payment)
    } catch (err) {
        console.log(err)
    }
}


module.exports = { addPayment }