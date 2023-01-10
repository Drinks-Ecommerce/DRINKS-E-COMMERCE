const { Router } = require('express');
const router = Router();
const getProducts = require("./productRoutes/gets")
const postProducts = require("./productRoutes/post")
const getTypes = require("./typesRoutes/gets")
const postRole = require("./rolesRoutes/post")
const getRole = require("./rolesRoutes/get")
const getUsers = require("./authRouter/get")
const postSingUp = require("./authRouter/postSingUp")
const postSingIn = require("./authRouter/postSingIn")
const postTypes = require("./typesRoutes/post") 
const deleteproduct = require("./productRoutes/delete")
const updateproduct = require("./productRoutes/update")
const filterbytypes = require("./filters/bytype")
const filterbyprice = require("./filters/byprice")
const filterbybrand = require("./filters/byBrand")


router.use("/products", getProducts);
router.use("/products", postProducts);
router.use("/types", getTypes);
router.use("/types", postTypes);
router.use("/roles", postRole)
router.use("/roles", getRole);
router.use("/users", getUsers);
router.use("/signUp", postSingUp);
router.use("/signIn", postSingIn)
router.use("/products", deleteproduct);
router.use("/products", updateproduct); 
router.use("/products", filterbytypes);
router.use("/products", filterbyprice);
router.use("/bybrand", filterbybrand);



module.exports = router;