const { Router } = require ("express");
const { Products} =  require( "../../db");
const {getProducts} = require("../../controllers/productsController")

const router = Router();

router.get("/byorigin/:origin", async(req,res)=>{
    const {origin}= req.params
    try{
        const all = await getProducts();
        if(origin){
            let filtrado = all.filter(e=> e.origin === origin);
            res.send(filtrado)
        }else{
            res.status(404)
        }

    }catch(err){
        console.log(err)
    }
})

module.exports = router;
