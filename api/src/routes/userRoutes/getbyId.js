const { Router } = require("express");
const { getbyUsername, getUsers,getbyIdUser, getbyEmail} = require("../../controllers/userController");

const router = Router();

router.get("/:id", async(req,res)=>{
    try{
        const {id}= req.params;
        const all = await getUsers();
   
        const user = await all.filter(e=> e.id === id)
        if(product.length){
            console.log(all)
            res.status(200).send(user)
        }else{
            res.status(404).send("id incorrecto")
        }

    }catch(err){
        console.log(err)
    }
})

module.exports = router;