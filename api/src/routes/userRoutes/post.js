const { Router } = require("express");
const { getProduct, getProducts } = require("../../controllers/productsController");
const { User } = require("../../db");

const router = Router();

router.post("/", async (req, res) => {
    try {

        const { username, name, last_name,email, password, img,adult,is_banned} = req.body

        const newUser = await User.create({
            username,
            name,
            last_name,
            email,
            password,
            img,
            adult,
            is_banned
        })

        res.send(newUser)

    } catch (error) {
        console.log(error)
    }
})


module.exports = router;