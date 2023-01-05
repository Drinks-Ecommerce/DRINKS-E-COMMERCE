
const { Router } = require("express");
const { User } = require('../../db');
const router = Router();

router.post("/", async (req, res) => {
    const userFound = await User.findOne({ email: req.body })
    if (!userFound) return res.status(400).json({ msg: "User not found" })

    console.log(userFound)
    res.json({ userFound })
})

module.exports = router;
