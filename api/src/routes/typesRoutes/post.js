const router = require("express").Router();
const { Type } = require("../../db")

router.post("/", async (req, res) => {
    const { name } = req.body;
    try {
        if (name) {
            await Type.findOrCreate({
                where: { name: name }
            })
            res.send("Categoria Creada")
        }
    } catch (err) {
        console.log(err)
        res.status(404).send("error en post category")
    }
})





module.exports = router; 

