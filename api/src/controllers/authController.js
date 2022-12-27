const { Role } = require('../db');

const signUp = async (req, res) => {
    res.json("signUp")
}

const signIn = async (req, res) => {
    res.json("singIn")
}

module.exports = { signUp, signIn }