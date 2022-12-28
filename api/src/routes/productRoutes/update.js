const { Router } = require ("express");
const { where } = require("sequelize");
const { getProduct, getProducts } = require("../../controllers/productsController");
const { Products, Type } = require("../../db");
const { get } = require("./delete");

const router = Router();

router.put("/:id", async(req,res)=>{
    try {
        const { id } = req.params;
        const { name, amount, price,description,img,comments,types } = req.body
       

        const updateproduct = await Products.update(
            {name,amount,price,description,img,comments },
            { where:{ id } }
        )
        
        let updatetype = await Type.findAll({
            where:{name:types}
        })

        const product = await Products.findOne({
            where:{id}
        })

        product.setTypes(updatetype.map(t=> t.id))
        res.send("producto actualizado")
    } catch (error) {
        return res.status(400).json({ msg: error.msg })
    }
})

module.exports = router;