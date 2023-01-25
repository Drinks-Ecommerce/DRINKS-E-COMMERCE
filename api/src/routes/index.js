const { Router } = require('express');
const router = Router();
const getProducts = require("./productRoutes/gets")
const postProducts = require("./productRoutes/post")
const getTypes = require("./typesRoutes/gets")


const postRole = require("./rolesRoutes/post")
const getRole = require("./rolesRoutes/get")
const getUsers = require("./userRoutes/get")
const postUser = require("./userRoutes/post")
const postSingUp = require("./authRouter/postSingUp")
const postSingIn = require("./authRouter/postSingIn")
const postTypes = require("./typesRoutes/post")
const deleteproduct = require("./productRoutes/delete")
const updateproduct = require("./productRoutes/update")
const filterbytypes = require("./filters/bytype")
const filterbyprice = require("./filters/byprice")
const filterbybrand = require("./filters/byBrand")
const deleteTypes = require("./typesRoutes/delete")
const getCart = require('./cartRoutes/get')
const deleteProductCart = require('./cartRoutes/delete')
const addProductCart = require('./cartRoutes/post')
const updateProductCart = require('./cartRoutes/put')

const deleteUser = require("./userRoutes/delete")
const updateUser = require("./userRoutes/update")
const userByID = require("./userRoutes/getbyId")
const filterbyorigin = require("./filters/byorigin")

const addPayment = require('./paymentRoutes/post')
const getallPayment = require('./paymentRoutes/getAll')
const deletePayment = require("./paymentRoutes/delete")
const checkout = require("./mercadopago/checkout");
const { route } = require('./mercadopago/checkout');


const addReview = require('./reviewRoutes/post')
const getReview = require('./reviewRoutes/get')
const deleteReview = require('./reviewRoutes/delete')
const updateReview = require('./reviewRoutes/put')


const postWishList = require("./wishlistRoutes/post")
const getWishList = require("./wishlistRoutes/get")
const deleteWishList = require("./wishlistRoutes/delete")

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
router.use("/products", filterbyorigin);

/*********************************   router USERS & AUTH   ***************************************/
router.use("/roles", postRole)
router.use("/roles", getRole);
router.use("/users", getUsers);
router.use("/users/delete", deleteUser);
router.use("/users/update", updateUser);
router.use("/users/add", postUser);
router.use("/users/id", userByID);
router.use("/signUp", postSingUp);
router.use("/signIn", postSingIn)

/*******************************  routes CART  *********************************** */
router.use('/cart', getCart)
router.use('/cart', deleteProductCart)
router.use('/cart', addProductCart)
router.use('/cart', updateProductCart)

/*******************************  routes PAYMENT  *********************************** */
router.use('/payment',addPayment)
router.use('/payment',getallPayment)
router.use("/payment",deletePayment)
router.use("/checkout", checkout)


/*******************************  routes REVIEWS  *********************************** */
router.use("/review", addReview)
router.use("/review", getReview)
router.use("/review", deleteReview)
router.use("/review", updateReview)





/* *************************  routes WISHLIST   **************************************** */
router.use("/wishlist",getWishList)
router.use("/wishlist/delete",deleteWishList)
router.use("/wishlist",postWishList)



module.exports = router;