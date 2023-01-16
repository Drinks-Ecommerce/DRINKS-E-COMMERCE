const e = require("express");
const mercadopago = require("mercadopago")

crearOrden = async (req, res) => {
    // TEST-4012101398950150-011321-7d4eec3fae82c46fb761d5ddd109731a-1286736524

    mercadopago.configure({
        access_token: 'TEST-4012101398950150-011321-7d4eec3fae82c46fb761d5ddd109731a-1286736524'
    });

    var preference = {
        items: [
            {
                title: 'Vino',
                quantity: 1,
                currency_id: 'ARS',
                unit_price: 1.5
            }
        ],
        notification_url: "https://d763-186-183-64-128.eu.ngrok.io/notificationOrder"
    };

    mercadopago.preferences.create(preference)
        .then((r) => {
            res.json(r.response.init_point)
        })
        .catch((e) => {
            console.log(e)
        })
}


notificacionOrden = async (req, res) => {
    const datos = req.query;

    console.log(datos)
    res.status(200)
}


module.exports = { crearOrden, notificacionOrden };