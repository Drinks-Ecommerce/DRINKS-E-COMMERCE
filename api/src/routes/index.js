const { Router } = require('express');
const router = Router();
const getProducts = require("./productRoutes/gets")
const postProducts = require("./productRoutes/post")
const getTypes = require("./typesRoutes/gets")
const postTypes = require("./typesRoutes/post")
const getCart = require("./cartRoutes/get") 

router.use("/products", getProducts);
router.use("/products", postProducts);
router.use("/types", getTypes);
router.use("/types", postTypes);
router.use("/cart", getCart);


module.exports = router;