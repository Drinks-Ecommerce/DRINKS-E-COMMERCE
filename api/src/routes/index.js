const { Router } = require('express');
const router = Router();
const getProducts = require("./productRoutes/gets")
const postProducts = require("./productRoutes/post")
const getTypes = require("./typesRoutes/gets")


const postRole = require("./rolesRoutes/post")
const getRole = require("./rolesRoutes/get")
<<<<<<< HEAD
const getUsers = require("./userRoutes/get")
=======
//const getUsers = require("./usersMio/get")
>>>>>>> mirrow
const postSingUp = require("./authRouter/postSingUp")
const postSingIn = require("./authRouter/postSingIn")
const postTypes = require("./typesRoutes/post") 
const deleteproduct = require("./productRoutes/delete")
const updateproduct = require("./productRoutes/update")
const filterbytypes = require("./filters/bytype")
const filterbyprice = require("./filters/byprice")
const filterbybrand = require("./filters/byBrand")
const deleteTypes = require("./typesRoutes/delete")
const deleteUser = require("./userRoutes/delete")
const updateUser = require("./userRoutes/update")

/**************************** routes PRODUCTS ***************************/
router.use("/products", getProducts);
router.use("/products", postProducts);
router.use("/products", deleteproduct);
router.use("/products", updateproduct); 


/* *************************  routes TYPES   **************************************** */
router.use("/types", getTypes);
router.use("/types", postTypes);
router.use("/types/delete", deleteTypes)


/*******************************  routes FILTERS  *********************************** */
router.use("/products", filterbytypes);
router.use("/products", filterbyprice);
router.use("/bybrand", filterbybrand);


/*********************************   router USERS & AUTH   ***************************************/
router.use("/roles", postRole)
router.use("/roles", getRole);
<<<<<<< HEAD
router.use("/users", getUsers);
router.use("/users", deleteUser);
router.use("/users", updateUser);
=======
//router.use("/users", getUsers);
>>>>>>> mirrow
router.use("/signUp", postSingUp);
router.use("/signIn", postSingIn)





module.exports = router;