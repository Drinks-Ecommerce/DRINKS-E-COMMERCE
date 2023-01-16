const { Router } = require("express");
const  {Payment} =require( "../../db");

const router = Router();

router.delete("/:id", async(req,res)=>{
    try{
        const {id} = req.params
        if(id){
            await Payment.destroy({
                where:{id:id}
            })
        }
        res.send("payment delete")

    }catch(err){
        console.log(err)
    }
})


module.exports = router