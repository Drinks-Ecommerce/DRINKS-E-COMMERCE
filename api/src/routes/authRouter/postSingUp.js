
const { Router } = require("express");
const { User, Role } = require('../../db');
const { encrypt } = require("./helpers/handleBcrypt")
const jwt = require("jsonwebtoken");
const config = require("./config/auth");
const { createTrans } = require("./config/emailer")

const router = Router();

router.post("/", async (req, res) => {

    try {
        const { username, email, password, adult, roles } = req.body;

        const passwordHash = await encrypt(password)

        const newUser = await User.create({
            username,
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
            res.send({ token })
        } else {
            res.status(404).send("Edad insuficiente")
        }

        const sendMail = async () => {
            const transporter = createTrans()
            const info = await transporter.sendMail({
                from: '"Vinario Drinks 🍸" <vinario.drinks@gmail.com>', // sender address
                to: newUser.email, // list of receivers
                subject: "Bienvenido a tu comunidad  ✔", // Subject line
                html: `<h4>Hi! ${newUser.username}</h4>
                <p>Welcome to Vinario Drinks!
            It is a pleasure for us to have you here.</br>
            </br>
            Sending you the best!</br>
            VinarioDrinks Team.
            <p/>`, // html body
            });
            console.log("Message sent: %s", info.messageId);
            return
        }

        sendMail();

    } catch (error) {
        /*         res.status(404).send(error) */
        res.status(404).send(error)


    }
})


module.exports = router;