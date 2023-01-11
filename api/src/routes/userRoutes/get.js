const { Router } = require("express");
const { getbyUsername, getUsers,getbyIdUser, getbyEmail} = require("../../controllers/userController");

const router = Router();

router.get("/", async (req, res) => {
    const { user_name, email} = req.query;
    try {
        if (user_name) {
            const user = await getbyUsername(user_name);
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

router.get("/", async(req,res)=>{
    try{
        const {email} = req.query;
        if(email){
            const userbyE = await getbyEmail(email);
            res.send(userbyE)
        }else{

        }
    }catch(err){
        console.log(err)
    }
})

module.exports = router;