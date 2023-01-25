const { Router } = require("express");
const { User, Cart, Products, Payment, Orderdetail, Productcart } = require("../../db");
const OrderDetail = require("../../models/OrderDetail");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const { id } = req.query;
    let payment = await Payment.findOne({
      where: { userId: id },
    })

    let ordenesDetal = await Orderdetail.findAll({
      where: { paymentId: payment.id }
    })

    res.status(200).json({ payment, ordenesDetal });
  } catch (error) {
    next(error);
  }

})



module.exports = router;