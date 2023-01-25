 const { Role } = require("../db")

const allRoles = () => {
    try {
        const rolesDb = Role.findAll();

        if (!rolesDb.length) {

            const roles = ["admin", "user", "socio"];

            roles.map(async (e) => {
                await Role.findOrCreate({
                    where: { name: e }
                })
            })
            return roles;
        }
        else {
            return rolesDb;
        }

    } catch (error) {
        console.log(error)
    }
}

allRoles();
module.exports = { allRoles } 