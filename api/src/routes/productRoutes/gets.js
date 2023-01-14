const { Router } = require ("express");
const { getProduct, getProducts } = require("../../controllers/productsController");
const { Products, Type } =  require( "../../db");

const router = Router();


router.get("/", async(req,res)=>{
    const {name} = req.query
    try{
        if(name){
            const product = await getProduct(name);
            res.send(product) 
        }else{
            const all = await getProducts();
            res.send(all)
        }

    }catch(err){
        console.log(err)
    }
})


router.get("/:id", async(req,res)=>{
    try{
        const {id}= req.params;
        const all = await getProducts();
        
        const product = await all.filter(e=> e.id == id)
        if(product.length){
            res.status(200).send(product)
        }else{
            res.status(404).send("id incorrecto")
        }

    }catch(err){
        console.log(err)
    }
})




module.exports = router;