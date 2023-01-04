const { Router } = require ("express");
const { Products} =  require( "../../db");
const {getProducts} = require("../../controllers/productsController")

const router = Router();

router.get("/bytypes/:type", async(req,res)=>{
    const {type}= req.params
    try{
        const all = await getProducts();
        if(type){
            let filtrado = all.filter(e=> e.type?.includes(type));
            res.send(filtrado)
        }else{
            res.status(404)
        }

    }catch(err){
        console.log(err)
    }
})

module.exports = router;
