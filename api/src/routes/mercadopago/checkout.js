const router = require("express").Router();
const mercadopago = require("mercadopago");
require("dotenv").config();

mercadopago.configure({
access_token: 'TEST-4012101398950150-011321-7d4eec3fae82c46fb761d5ddd109731a-1286736524',
});

router.post("/", (req, res) => {
  const orderdet = req.body;

  let preference = {
    items: [],
    notification_url: "https://433d-186-183-64-128.sa.ngrok.io/notificationOrder"
  };

  if (Array.isArray(orderdet)) {
    for (let i = 0; i < orderdet.length; i++) {
      preference.items.push({
        title: orderdet[i].name,
        picture_url: orderdet[i].img,
        unit_price:parseInt(orderdet[i].priceProduct),
        quantity:orderdet[i].quantity,
        
      });
    }
  } else {
    preference.items.push({
      title: orderdet.name,
      picture_url: orderdet.picture_url,
      unit_price:parseInt(orderdet.price),
      quantity:orderdet.quantity,
    });
  }

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.send(response.response.init_point);
      /*  res.redirect(response.response.init_point); */
    })
    .catch(function (error) {
      console.log(error);
    });
});
module.exports = router;