const { Router } = require ("express");
const { Products} =  require( "../../db");
const {getProducts} = require("../../controllers/productsController");
const { get } = require("./bytype");


const router = Router();

router.get("/byprice/:order", async(req,res)=>{
    const {order} = req.params
    try{
        const all = await getProducts()
        if(order === "min"){
            const min = all.sort((a,b)=> a.price - b.price)
            res.send(min)
        }
        if(order === "max"){
            const max = all.sort((a,b)=> b.price - a.price)
            res.send(max)
        }else{
            res.send(all)
        }

    }catch(err){
        console.log(err)
    }
})


module.exports = router;