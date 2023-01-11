const router = require("express").Router();
const { allRoles } = require("../../controllers/rolesController");

router.get("/", async (req, res) => {
    try {
        const rolesUsers = await allRoles();
        if (!rolesUsers.length) {
            res.send("no roles found")
        } else {
            res.json(rolesUsers)
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;