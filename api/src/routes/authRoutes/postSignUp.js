const { Router } = require("express");
const { signUp, signIn } = require("../controllers/authController")

const router = Router();

router.post("/", async (req, res) => {
    try {
        res.json("signUp")
    } catch (error) {
        console.log(error)
    }
});


module.exports = router;