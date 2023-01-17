
const { Router } = require("express");
const { User, Role } = require('../../db');
const { encrypt } = require("./helpers/handleBcrypt")
const jwt = require("jsonwebtoken");
const config = require("./config/auth");
const {enviarMail} = require("./config/emailer")
const router = Router();

router.post("/", async (req, res) => {

    try {
        const { username, name, last_name,email, password, img,adult} = req.body;
        const passwordHash = await encrypt(password)

        const newUser = await User.create({
            username,
            name,
            last_name,
            email,
            img,
            password: passwordHash,
            adult,
        })

        const token = jwt.sign({ id: newUser._id }, config.SECRET, {
            expiresIn: 86400
        })

        let roleDb = await Role.findAll({
            where: {name: "user"}
        })

        if (adult === true) {
            newUser.addRole(roleDb);
             await enviarMail(email, token)
            res.send({ token })
        } else {
            res.status(404).send("Edad insuficiente")
        }

    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
})


module.exports = router;