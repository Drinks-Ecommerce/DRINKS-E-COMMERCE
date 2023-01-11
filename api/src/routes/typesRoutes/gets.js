 const router = require("express").Router();
const {allTypes} = require("../../controllers/typesControllers")

router.get("/", async(req,res)=>{
    try{
        const typesDrinks = await allTypes();
        if(!typesDrinks.length){
            res.send("sin categorias")
        }else{
            res.json(typesDrinks)
        }
    }catch(err){
        console.log(err)
    }

})
module.exports = router;   