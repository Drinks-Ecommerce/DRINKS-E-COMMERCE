const { User, Role } = require("../db");
const { Op } = require("sequelize");

const getUsers = async () => {
    try {
        const users = await User.findAll({
            include: {
                model: Role,
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }
        })

        const result = await users.map(e => {
            return {
                id: e.id,
                email: e.email,
                password: e.password,
                adult: e.adult,

                role: e.roles.map((e) => e.name)
            }
        })
        return result;
    } catch (error) {
        console.log(error)
    }
}

const getUser = async (email) => {
    try {

        const userEmail = await Products.findAll({
            where: {
                email: { [Op.iLike]: `%${email}%` }
            },
            include: {
                model: Role,
                attributes: ["name"],
                through: {
                    attributes: [],
                }
            }
        })

        const res = await userEmail.map(e => {
            return {
                id: e.id,
                email: e.email,
                password: e.password,
                adult: e.adult,

                role: e.roles.map((e) => e.email)

            }
        })
        return (res)

    } catch (error) {
        return res.status(400).json({ msg: error.msg })
    }
}

module.exports = { getUser, getUsers }