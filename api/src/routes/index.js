const { Router } = require('express');
const router = Router();
const getProducts = require("./productRoutes/gets")
const postProducts = require("./productRoutes/post")
 const getTypes = require("./typesRoutes/gets") 

router.use("/products", getProducts);
router.use("/products", postProducts);
 router.use("/types", getTypes) 

module.exports = router;