const { json } = require('body-parser');
const { User } = require('../db');
const { encrypt } = require("../helpers/handleBcrypt")
const jwt = require("jsonwebtoken");
const config = require("../config/auth");
const { use } = require('../routes/authRoutes/postSignUp');

const signUp = async (req, res) => {
    try {
        const { email, password, age } = req.body;

        const passwordHash = await encrypt(password)
        const newUser = new User({
            email,
            password: passwordHash,

        })
        console.log(newUser)
        const token = jwt.sign({ id: newUser._id }, config.SECRET, {
            expiresIn: 86400
        })
        res.json({ token })

    } catch (error) {
        return res.status(400).json({ msg: error.msg })
    }


}

const signIn = async (req, res) => {

    const userFound = await User.findOne({ email: req.body })

    if (!userFound) return res.status(400).json({ message: "User not found" })

    console.log(userFound)
    res.json({ token: '' })
}
module.exports = { signUp, signIn };
