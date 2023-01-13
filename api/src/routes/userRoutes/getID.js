const { Router } = require ("express");
const { Products, User} =  require( "../../db");

const router = Router()

router.get("/:id", async(req,res)=>{
    const {id} = req.params;
    try{
        if(id){
            await User.findAll({
                where: {id:id}
            })
        }
        return res.send({msg:"User delete"})

    }catch(err){
        console.log(err)
    }
})




module.exports = router;  