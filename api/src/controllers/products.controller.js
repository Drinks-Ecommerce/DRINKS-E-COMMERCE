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

export const updateProduct = async (req, res) => {

    try {
        const { id } = req.params;
        const { name, amount, worth } = req.body

        const product = await Product.findByPk(id);
        product.name = name;
        product.amount = amount;
        product.worth = worth;

        await product.save();
        res.json(product)

    } catch (error) {
        return res.status(400).json({ msg: error.msg })
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        await Product.destroy({
            where: {
                id,
            }
        })
        res.json({ msg: "Deleted product" })
    } catch (error) {
        return res.status(400).json({ msg: error.msg })
    }
}

export const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findOne({
            where: {
                id
            }
        })
        if (!product) return res.status(404).json({ msg: "The product does not exist" })
        res.json(product)
    } catch (error) {
        return res.status(400).json({ msg: error.msg })
    }
}