
const { Router } = require("express")
const bcrypt = require("bcryptjs");
const { comparePassword } = require("./helpers/handleBcrypt")
const jwt = require("jsonwebtoken")
const { User, Role } = require('../../db');
const config = require("./config/auth");

const router = Router();

router.post("/", async (req, res) => {
    const { email, password } = req.body;

    const userFound = await User.findOne({
        include:[{model: Role}],
        where: { email }
    })

    
    if (!userFound) return res.status(404).json({ msg: "User not found" })

    const matchPassword = await bcrypt.compare(password, userFound.password)

    if (!matchPassword) return res.status(401).json({ msg: "Invalid password" })

    console.log(userFound)
    console.log(userFound.roles)

    res.json({userFound})


})

module.exports = router;
