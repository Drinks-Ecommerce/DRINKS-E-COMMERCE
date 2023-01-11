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
                username: e.username,
                name:e.name,
                last_name:e.last_name,
                email: e.email,
                password: e.password,
                adult: e.adult,
                img:e.img,
                is_banned:e.is_banned,
                role: e.roles.map((e) => e.name)
            }
        })
        return result;
    } catch (error) {
        console.log(error)
    }
}

const getbyUsername = async (username) => {
    try {

        const userEmail = await User.findAll({
            where: {
                username: { [Op.iLike]: `%${username}%` }
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
                username: e.username,
                name:e.name,
                last_name:e.last_name,
                email: e.email,
                password: e.password,
                adult: e.adult,
                img:e.img,
                is_banned:e.is_banned,
                role: e.roles.map((e) => e.name)
            }
        })
        return (res)

    } catch (error) {
        return res.status(400).json({ msg: error.msg })
    }
}



const getbyIdUser= async (id) => {
    try {

        const userEmail = await User.findAll({
            where: {id:id},
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
                username: e.username,
                name:e.name,
                last_name:e.last_name,
                email: e.email,
                password: e.password,
                adult: e.adult,
                img:e.img,
                is_banned:e.is_banned,
                role: e.roles.map((e) => e.name)
            }
        })
        return (res)

    } catch (error) {
        return res.status(400).json({ msg: error.msg })
    }
}


const getbyEmail= async (email) => {
    try {

        const userEmail = await User.findAll({
            where: {
                email:  email 
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
                username: e.username,
                name:e.name,
                last_name:e.last_name,
                email: e.email,
                password: e.password,
                adult: e.adult,
                img:e.img,
                is_banned:e.is_banned,
                role: e.roles.map((e) => e.name)
            }
        })
        return (res)

    } catch (error) {
        return res.status(400).json({ msg: error.msg })
    }
}


module.exports = { getbyUsername, getUsers,getbyIdUser, getbyEmail}