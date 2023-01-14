const router = require("express").Router();
const { Role } = require("../../db")

router.post("/", async (req, res) => {
    const { name } = req.body;
    try {
        if (name) {
            await Role.findOrCreate({
                where: { name: name }
            })
            res.send("Role creado")
        }
    } catch (err) {
        console.log(err)
        res.status(404).send("error en post category")
    }
})

module.exports = router;  