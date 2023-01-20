
const router = require("express").Router();

const { wishlist, wishlistByUserId } = require('../../Controllers/wishListController');

router.get('/', async (req, res) => {
    const { userId } = req.query
    try {
        if (userId) {
            const user = await wishlistByUserId(userId)
            res.send(user)
        }
        else {
            const info = await wishlist()
            res.send(info)
        }
    }
    catch (err) {
        console.log(err)
    }

})

module.exports = router;