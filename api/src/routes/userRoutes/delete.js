const { Router } = require("express");
const { getbyUsername, getUsers,getbyIdUser, getbyEmail} = require("../../controllers/userController");
const { User, Role } = require("../../db");
const { Op } = require("sequelize");
const router = Router();

router.delete("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        if (id) {
            await User.destroy({
                where:{id}
            })
            res.send({msg:"User delete"})
        }
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;