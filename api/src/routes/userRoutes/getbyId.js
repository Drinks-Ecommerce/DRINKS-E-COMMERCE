const { Router } = require("express");
const { getbyUsername, getUsers,getbyIdUser, getbyEmail} = require("../../controllers/userController");
const { Products, Type } =  require( "../../db");

const router = Router();

router.get("/:id", async(req,res)=>{
    try{
        const {id}= req.params;
        const all = await getUsers();
        
        const user = await all.filter(e=> e.id == id)
        if(user.length){
            res.status(200).send(await user)
        }else{
            res.status(404).send("id incorrecto")
        }

    }catch(err){
        console.log(err)
    }
})

module.exports = router;