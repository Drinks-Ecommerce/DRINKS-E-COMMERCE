const { Product, Wishlist } = require("../db");

const Wishlist = async () => {
    const arrDB = await Wishlist.findAll({
        include: {
            model: Product,
            attributes: ["id", "name", "img", "price", "brand", "calification"]
        }
    })


    const result = await arrDB.map(el => {
        return {
            id: el.id,
            user: el.userId,
            productId: el.products.map((p) => p.id),
            product: el.products.map((p) => p.name),
            img: el.products.map((p) => p.img),
            price: el.products.map((p) => p.price),
            brand: el.products.map((p) => p.brand),
            calification: el.products.map((p) => p.calification)
        }
    })
    return result
}

const wishlistByUserId = async (userId) => {
    const userDb = await Wishlist.findAll({
        where: {
            userId
        },
        include: {
            model: Product,
            attributes: ["id", "name", "img", "price", "brand", "calification"]
        }
    })

    const result = await userDb.map(el => {
        return {
            id: el.id,
            user: el.userId,
            productId: el.products.map((p) => p.id),
            product: el.products.map((p) => p.name),
            img: el.products.map((p) => p.img),
            price: el.products.map((p) => p.price),
            brand: el.products.map((p) => p.brand),
            calification: el.products.map((p) => p.calification)
        }
    })
    return result
}

module.exports = { Wishlist, wishlistByUserId }