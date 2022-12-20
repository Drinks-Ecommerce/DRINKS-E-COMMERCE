import { json } from "sequelize";
import { Product } from "../models/Product.js";
import { TypeDrink } from "../models/TypeDrink.js";

export const getProducts = async (req, res) => {

    try {
        const products = await Product.findAll()
        res.json(products)
    } catch (error) {
        res.status(400).json({ msg: error.msg })
    }
}

export const createProduct = async (req, res) => {
    const { name, amount, worth } = req.body

    try {
        const newProduct = await Product.create({
            name,
            amount,
            worth
        })
        res.json(newProduct)
    } catch (error) {
        res.status(400).json({ msg: error.msg })
    }
}