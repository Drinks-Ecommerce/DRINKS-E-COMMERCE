
const { Router } = require("express");
const { User, Role } = require('../../db');
const { encrypt } = require("./helpers/handleBcrypt")
const jwt = require("jsonwebtoken");
const config = require("./config/auth");

const router = Router();

router.post("/", async (req, res) => {

    try {
        const { email, password, adult, roles } = req.body;

        const passwordHash = await encrypt(password)

        const newUser = await User.create({
            email,
            password: passwordHash,
            adult,
        })

        const token = jwt.sign({ id: newUser._id }, config.SECRET, {
            expiresIn: 86400
        })

        let roleDb = await Role.findAll({

            where: { name: roles }

        })

        if (adult === true) {
            newUser.addRole(roleDb);
            res.send({token})
        } else {
            res.status(404).send("Edad insuficiente")
        }


    } catch (error) {
        console.log(error)
    }
})


module.exports = router;