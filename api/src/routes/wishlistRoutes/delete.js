const router = require("express").Router();
const { Wishlist } = require('../../db');

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        if (id) {
            await Wishlist.destroy({
                where: { id }
            })
        }
        return res.send({ msg: "Wishlist deleted" })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;