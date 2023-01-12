const { Router } = require("express");
const { getbyUsername, getUsers,getbyIdUser, getbyEmail} = require("../../controllers/userController");
const { User, Role } = require("../../db");
const { Op } = require("sequelize");
const router = Router();



router.put("/:id", async(req,res)=>{
    try {
        const { id } = req.params;
        const { username, name, last_name,email, password, img,adult,is_banned } = req.body
       

        const updateUser= await User.update(
            {username, name, last_name,email, password, img,adult,is_banned},
         { where:{ id } }
        )
        
        const user = await Products.findOne({
            where:{id}
        })
        res.send("producto actualizado")
    } catch (error) {
        return res.status(400).json({ msg: error.msg })
    }
})

module.exports = router;