const { Router } = require ("express");
const { getProduct, getProducts } = require("../../controllers/productsController");
const { Products, Type } =  require( "../../db");

const router = Router();

router.post("/", async(req,res)=>{
   
    try {
        const { name, amount, price, description, img, type } = req.body
        const newProduct = await Products.create({
            name,
            amount,
            price,
            description,
            img,
        })

        let types = await Type.findAll({
            where: {name: type},
          });

         newProduct.addType(types);
         res.send(newProduct)

    } catch (error) {
        console.log(error)
    }
})


module.exports = router;