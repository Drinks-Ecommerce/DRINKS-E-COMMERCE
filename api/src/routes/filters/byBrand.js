const { Router } = require ("express");
const { getProduct, getProducts } = require("../../controllers/productsController");
const { Products, Type } =  require( "../../db");
const { Op } = require("sequelize");

const router = Router();


router.get('/', async(req,res)=>{
    try{
        const { brand } = req.query;
        const productByBrand = await Products.findAll({
            where: {
                brand: { [Op.iLike]: `%${brand}%` }
            },
            include: {
                model: Type,
                attributes: ["name"],
                through: {
                    attributes: [],
                }
            }
        })
        if(!productByBrand.length){
            res.send("marca invalida")
        }else{
        const response = await productByBrand.map(e => {
            return {
                id: e.id,
                name: e.name,
                stock:e.stock,
                price:e.price,
                description:e.description,
                brand:e.brand,
                discount:e.discount,
                origin:e.origin,
                alcohol:e.alcohol,
                img:e.img,
                comments:e.comments,
                calification:e.calification,
                type: e.types.map((e)=> e.name)

            }
        })
        res.send(response)
    }
    
    }catch(err){
        console.log(err)
    }
});

module.exports = router;
