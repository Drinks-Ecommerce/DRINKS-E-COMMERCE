const { Router } = require ("express");
const { getProduct, getProducts } = require("../../controllers/productsController");
const { Products} =  require( "../../db");

const router = Router();

router.delete("/:id", async(req,res)=>{
    const { id } = req.params;
    try {
        await Products.destroy({
            where: {id,}
        })
        res.json({ msg: "Deleted product" })
    } catch (error) {
        console.log(error)
        res.status(400).json({ msg: error.msg })
    }
})

module.exports = router;