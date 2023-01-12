const { Router } = require("express");
const { getbyUsername, getUsers,getbyIdUser, getbyEmail} = require("../../controllers/userController");

const router = Router();

router.get("/", async (req, res) => {
    const { username, email} = req.query;
    try {
        if (username) {
            const user = await getbyUsername(username);
            res.send(user)
        }else if(email){
            const userbyE = await getbyEmail(email);
            res.send(userbyE)

        }else{
            const info = await getUsers();
            res.send(info)
        }
         
    } catch (error) {
        console.log(error)
    }
})

router.get("/:email", async(req,res)=>{
    try{
        const {email} = req.params;
        if(email){
            const userbyE = await getbyEmail(email);
            res.send(userbyE)
        }else{
            res.send({msg:"email not found"})
        }
    }catch(err){
        console.log(err)
    }
})

module.exports = router;