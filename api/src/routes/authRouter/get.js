const { Router } = require("express");
const { getUsers, getUser } = require("../../controllers/userController");

const router = Router();

router.get("/", async (req, res) => {
    const { email } = req.query;
    try {
        if (email) {
            const user = await getUser(email);
            res.send(user)
        } else {
            const allusers = await getUsers();
            res.send(allusers)
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;