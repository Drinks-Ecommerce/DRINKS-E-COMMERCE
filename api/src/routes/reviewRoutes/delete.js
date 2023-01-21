const { Router } = require("express");
const router = Router();

const { Review } =  require( "../../db");

router.delete("/:id", async(req,res)=>{
    try{
        const { id } = req.params;
        if(id){
            await Review.destroy({
                where:{
                    id: id
                }
            })
        }
        res.status(200).send('Review deleted');
    }catch(err){
        console.log(err)
    }
})
module.exports = router;  