const { Router } = require ("express");
const { Products, Type} =  require( "../../db");
const { Op } = require("sequelize");
const {getProducts} = require("../../controllers/productsController");

const router = Router();

router.get('/', async(req,res)=>{
    try {
        const { brand } = req.query;
        const allProducts = await getProducts()
    
        const productByBrand = await Products.findAll({
            where: {
                brand: { [Op.iLike]: `%${brand}%` }
            },
            include: {
                model: Type,
                attributes: ["name"],
                through: {
                attributes: [],
                },
            },
        })
    
        if(!productByBrand.length){
        res.send({ msg: "No se encontraron productos con esa marca" });
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
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;