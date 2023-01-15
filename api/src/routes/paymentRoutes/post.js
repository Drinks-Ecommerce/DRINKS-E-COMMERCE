const { Router } = require("express");
const { addPayment } = require("../../controllers/paymentControllers");

const router = Router();

router.post("/addPayment", addPayment)



module.exports = router;