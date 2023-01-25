const { Router } = require("express");
const { getbyUsername, getUsers, getbyIdUser, getbyEmail } = require("../../controllers/userController");

const router = Router();

router.get("/", async (req, res) => {
    const { username, email } = req.query;
    try {
        if (username) {
            const user = await getbyUsername(username);
            res.send(user)
        } else if (email) {
            const userbyE = await getbyEmail(email);
            res.send(userbyE)

        } else {
            const info = await getUsers();
            res.send(info)
        }

    } catch (error) {
        console.log(error)
    }
})

router.get("/:email", async (req, res) => {
    try {
        const { email } = req.params;
        if (email) {
            const userbyE = await getbyEmail(email);
            res.send(userbyE)
        } else {
            res.send({ msg: "email not found" })
        }
    } catch (err) {
        console.log(err)
    }
})

router.get("/username/:username", async (req, res) => {
    try {
        const { username } = req.params;
        if (username) {
            const userbyE = await getbyUsername(username);
            res.send(userbyE)
        } else {
            res.send({ msg: "username not found" })
        }
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;