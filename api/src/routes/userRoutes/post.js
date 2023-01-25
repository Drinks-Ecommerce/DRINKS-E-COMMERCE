const { Router } = require("express");
const { getProduct, getProducts } = require("../../controllers/productsController");
const { User, Role} = require("../../db");

const router = Router();

router.post("/", async (req, res) => {
    try {

        const { username, name, last_name,email, password, img,adult,is_banned,roles}= req.body

        const newUser = await User.create({
            username,
            name,
            last_name,
            email,
            password,
            img,
            adult,
            is_banned,

        })

        const roledb = await Role.findAll({
            where:{name:roles}
        })

        newUser.addRole(roledb)
        res.send(newUser)

    } catch (error) {
        console.log(error)
    }
})


module.exports = router;