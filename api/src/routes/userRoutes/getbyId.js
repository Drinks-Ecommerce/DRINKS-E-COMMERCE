const { Router } = require("express");
const { getbyUsername, getUsers,getbyIdUser, getbyEmail} = require("../../controllers/userController");

const router = Router();

router.get("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        if (id) {
            const user = await getbyIdUser(id);
            res.send(user)
        }else{
            res.send({msg:"User Not Found"})
        }
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;