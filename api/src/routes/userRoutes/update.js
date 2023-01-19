const { Router } = require("express");
const { getbyUsername, getUsers,getbyIdUser, getbyEmail} = require("../../controllers/userController");
const { User, Role } = require("../../db");
const { Op } = require("sequelize");
const router = Router();

router.put("/:id", async(req,res)=>{
    try{
            const { id } = req.params;
            const { username, name, last_name,email, password, img,adult,is_banned,roles} = req.body
    
            const updateUser= await User.update(
                {username, name, last_name,email, password, img,adult,is_banned},
            { where:{ id } }
            )

            let getroles = await Role.findAll({
            where:{name:roles}
            })

        
            const user = await Role.findOne({
                where:{id}
            })

            res.send({msg:"user update exit"},user)
    } catch (error){
        console.log(error)
        return res.status(400).json({ msg: error.msg })
    }
})

module.exports = router;