const { Router } = require ("express");
const { getProduct, getProducts } = require("../../controllers/productsController");
const { Products, Type } = require("../../db");
const { get } = require("./delete");

const router = Router();

get.put("/id", async(req,res)=>{
    try {
        const { id } = req.params;
        const { name, amount, price, description,img,comments } = req.body
       

        const product = await Product.findByPk(id);
        product.name = name;
        product.amount = amount;
        product.price = price;

        await product.save();
        return(product)

    } catch (error) {
        return res.status(400).json({ msg: error.msg })
    }
})