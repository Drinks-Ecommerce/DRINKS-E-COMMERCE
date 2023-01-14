
const { Router } = require("express")
const bcrypt = require("bcryptjs");
const { comparePassword } = require("./helpers/handleBcrypt")
const jwt = require("jsonwebtoken")
const { User } = require('../../db');
const config = require("./config/auth");

const router = Router();

router.post("/", async (req, res) => {
    const { email, password } = req.body;

    const userFound = await User.findOne({
        where: { email }
    })
    if (!userFound) return res.status(404).json({ msg: "User not found" })

    const matchPassword = await bcrypt.compare(password, userFound.password)

    if (!matchPassword) return res.status(401).json({ msg: "Invalid password" })

    console.log(userFound)

    res.json({ userFound })


})

module.exports = router;
