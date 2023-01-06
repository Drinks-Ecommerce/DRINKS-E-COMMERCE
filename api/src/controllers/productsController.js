const { Products, Type } = require("../db");
const { Op } = require("sequelize");

const getProducts = async () => {
    try {
        const products = await Products.findAll({
            include: {
                model: Type,
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }
        })
    
        const result = await products.map(e => {
            return {
                id: e.id,
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
                type: e.types.map((e)=> e.name)
            }
        })
        return result;

    } catch (error) {
        console.log(error)
    }
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
                type: e.types.map((e)=> e.name)

            }
        })
        return (res)

    } catch (error) {
        return res.status(400).json({ msg: error.msg })
    }
}

/* const getBybrand = async(brand) => {
    try {
        const productbrand = await Products.findAll({
            where: {
                brand: brand,
            },
            include: {
                model: Type,
                attributes: ["name"],
                through: {
                    attributes: [],
                }
            }
        })

        const resbybrand = await productbrand.map(e => {
            return {
                id: e.id,
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
                type: e.types.map((e)=> e.name)

            }
        })
        return (resbybrand)

    } catch (error) {
        return res.status(400).json({ msg: error.msg })
    }
}
 */

module.exports = {getProduct, getProducts}