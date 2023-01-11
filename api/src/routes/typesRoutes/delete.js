const router = require("express").Router();
const {allTypes} = require("../../controllers/typesControllers")
const { Products,Type} =  require( "../../db");

router.delete("/:id", async(req,res)=>{
    try{
        const {id} = req.params
        await Type.destroy({
            where:{id}
        })
        res.json({ msg: "Deleted type" })
       
    }catch(err){
        console.log(err)
        res.status(400).json({ msg: err.msg })
    }

})
module.exports = router;  