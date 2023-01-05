const { Router } = require('express');
const router = Router();
const getProducts = require("./productRoutes/gets")
const postProducts = require("./productRoutes/post")
const getTypes = require("./typesRoutes/gets")
const postTypes = require("./typesRoutes/post")
const postRole = require("./rolesRoutes/post")
const getRole = require("./rolesRoutes/get")
const getUsers = require("./authRouter/get")
const postSingUp = require("./authRouter/postSingUp")
const postSingIn = require("./authRouter/postSingIn")

router.use("/products", getProducts);
router.use("/products", postProducts);
router.use("/types", getTypes);
router.use("/types", postTypes);
router.use("/roles", postRole)
router.use("/roles", getRole);
router.use("/users", getUsers);
router.use("/signUp", postSingUp);
router.use("/signIn", postSingIn)

module.exports = router;