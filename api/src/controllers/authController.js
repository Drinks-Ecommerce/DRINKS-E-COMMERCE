const { json } = require('body-parser');
const { User } = require('../db');
const { encrypt } = require("../helpers/handleBcrypt")
const jwt = require("jsonwebtoken");
const config = require("../config/auth");
const { use } = require('../routes/authRoutes/postSignUp');

const signUp = async (req, res) => {
    try {
        const { email, password, adult } = req.body;

        const passwordHash = await encrypt(password)

        const newUser = await User.create({
            email,
            password: passwordHash,
            adult
        })

        const token = jwt.sign({ id: newUser._id }, config.SECRET, {
            expiresIn: 86400
        })
        
        res.json({ token })

    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: error.msg })
    }
    // 

}

const signIn = async (req, res) => {

    const userFound = await User.findOne({ email: req.body })

    if (!userFound) return res.status(400).json({ message: "User not found" })

    console.log(userFound)
    res.json({ token: '' })
}
module.exports = { signUp, signIn };
