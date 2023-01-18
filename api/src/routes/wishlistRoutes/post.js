const router = require("express").Router();
const { Product, Wishlist } = require("../../db");

router.post("/", async (req, res) => {
    const { userId, products } = req.body;

    try {
        let newWishList = await Wishlist.create({
            userId
        });
        let newProductWishList = await Product.findAll({
            where: { name: products },
        });

        newWishList.addProduct(newProductWishList);
        res.send("Wishlist Added")

    } catch (error) {
        res.send(error)
    }
})

module.exports = router;