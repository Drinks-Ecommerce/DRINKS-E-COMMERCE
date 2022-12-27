const { Router } = require('express');
const router = Router();
const getProducts = require("./productRoutes/gets")
const postProducts = require("./productRoutes/post")
const getTypes = require("./typesRoutes/gets")
 const postTypes = require("./typesRoutes/post") 

router.use("/products", getProducts);
router.use("/products", postProducts);
router.use("/types", getTypes)
router.use("/types", postTypes)  
module.exports = router;