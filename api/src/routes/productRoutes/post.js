const { Router } = require("express");
const { getProduct, getProducts } = require("../../controllers/productsController");
const { Products, Type } = require("../../db");

const router = Router();

/* id: e.id,
name: e.name,
stock:e.stock,
price:e.price,
description:e.description,
brand:e.brand,
discount:e.discount,
origin:e.origin,
alcohol:e.alcohol,
img:e.img,
comments:e.comments,
calification:e.calification,
type: e.types.map((e)=> e.name) */

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