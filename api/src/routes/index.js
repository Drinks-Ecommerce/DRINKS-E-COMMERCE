const { Router } = require('express');
const router = Router();
const getProducts = require("./productRoutes/gets")
const postProducts = require("./productRoutes/post")
const getTypes = require("./typesRoutes/gets")
const postTypes = require("./typesRoutes/post") 
const deleteproduct = require("./productRoutes/delete")
const updateproduct = require("./productRoutes/update")
const filterbytypes = require("./filters/bytype")
const filterbyprice = require("./filters/byprice")
const getbrands = require("./filters/bybrand")

router.use("/products", getProducts);
router.use("/products", postProducts);
router.use("/products", deleteproduct);
router.use("/products", updateproduct);
router.use("/types", getTypes);
router.use("/types", postTypes);  
router.use("/products", filterbytypes);
router.use("/products", filterbyprice)
router.use("/productsbybrand", getbrands)


module.exports = router;