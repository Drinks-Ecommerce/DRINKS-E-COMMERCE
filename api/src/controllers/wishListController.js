const { Products, Wishlist } = require("../db");

const wishlist = async () => {
    const arrDB = await Wishlist.findAll({
        include: {
            model: Products,
            attributes: ["name", "img", "price", "brand"],
            through: {
                attributes: []
            }
        }
    })
/*     console.log(arrDB) */
    const result = await arrDB.map(el => {
        /* console.log(el.products) */
        return {
            id: el.dataValues.id,
            user: el.dataValues.userId,
            name: el.products.map((e) => e.dataValues.name),
            img: el.products.map((e) => e.dataValues.img),
            price: el.products.map((e) => e.dataValues.price),
            brand: el.products.map((e) => e.dataValues.brand)
        }
    })
    return result
}

const wishlistByUserId = async (userId) => {
    const userDB = await Wishlist.findAll({
        where: {
            userId
        },
        include: {
            model: Products,
            attributes: ["id", "name", "img", "price", "brand"]
        }
    })

    const result = await userDB.map(e => {
        return {
            id: el.dataValues.id,
            user: el.dataValues.userId,
            name: el.products.map((e) => e.dataValues.name),
            img: el.products.map((e) => e.dataValues.img),
            price: el.products.map((e) => e.dataValues.price),
            brand: el.products.map((e) => e.dataValues.brand)
        }
    })

    return result
}

module.exports = { wishlist, wishlistByUserId };