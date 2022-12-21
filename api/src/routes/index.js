const { Router } = require('express');
const router = Router();
const getProducts = require("./productRoutes/gets")
const postProducts = require("./productRoutes/post")

router.use("/products", getProducts);
router.use("/products", postProducts);

module.exports = router;