const { Router } = require("express");
const { getProduct, getProducts } = require("../../controllers/productsController");
const { Products, Type } = require("../../db");

const router = Router();

router.post("/", async (req, res) => {
    try {

        const { name, stock, price, description, img,brand,discount,origin,alcohol,comments,calification, types } = req.body

        const newProduct = await Products.create({
            name,
            stock,
            price,
            description,
            brand,
            discount,
            origin,
            alcohol,
            comments,
            calification,
            img,
        })

        let typedb = await Type.findAll({
            where: { name: types }
        })

        newProduct.addType(typedb);
        res.send(newProduct)

    } catch (error) {
        console.log(error)
    }
})


module.exports = router;