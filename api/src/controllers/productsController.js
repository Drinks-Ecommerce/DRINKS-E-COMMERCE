const { Products, Type } = require("../db");
const { Op } = require("sequelize");
const jsonProducts = require("./JSON/JsonOfProducts");

const getProducts = async () => {

    const products = await Products.findAll({
        include: {
            model: Type,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    })

    if (products.length === 0) {
        try {
            jsonProducts.map(async (e) => {
                let newProduct = await Products.create({
                    name: e.name,
                    stock: e.stock,
                    img: e.img,
                    price: e.price,
                    description: e.description,
                    brand: e.brand,
                    comments: e.comments,
                    calification: e.calification,
                    discount: e.discount,
                    origin: e.origin,
                    alcohol: e.alcohol,
                });
                let newProductType = await Type.findAll({
                    where: { name: e.types },
                });

                newProduct.addType(newProductType);

                console.log("Base de datos de Productos completa")
            })
        } catch (error) {
            console.log("Error en Products", error)
        }
    }

    const result = await products.map(e => {
        return {
            id: e.id,
            name: e.name,
            stock: e.stock,
            price: e.price,
            description: e.description,
            brand: e.brand,
            discount: e.discount,
            origin: e.origin,
            alcohol: e.alcohol,
            img: e.img,
            comments: e.comments,
            calification: e.calification,
            type: e.types.map((e) => e.name)
        }
    })
    return (result);
}


const getProduct = async (name) => {
    try {
        const productname = await Products.findAll({
            where: {
                name: { [Op.iLike]: `%${name}%` }
            },
            include: {
                model: Type,
                attributes: ["name"],
                through: {
                    attributes: [],
                }
            }
        })

        const res = await productname.map(e => {
            return {
                id: e.id,
                name: e.name,
                stock: e.stock,
                price: e.price,
                description: e.description,
                brand: e.brand,
                discount: e.discount,
                origin: e.origin,
                alcohol: e.alcohol,
                img: e.img,
                comments: e.comments,
                calification: e.calification,
                type: e.types.map((e) => e.name)

            }
        })
        return (res)

    } catch (error) {
        return res.status(400).json({ msg: error.msg })
    }
}

module.exports = { getProduct, getProducts }