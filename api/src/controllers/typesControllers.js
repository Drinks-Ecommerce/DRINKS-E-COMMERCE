const { Type } = require("../db");

const allTypes = () => {
    try {
        const typeDB = Type.findAll();
        if (!typeDB.length) {
            const types = ["vino"];

            const dbTypes = types.map(async e => {
                await Type.findOrCreate({
                    where: { name: e }
                })
            })

            return dbTypes
        }
        else {
            return typeDB;
        }
    } catch (err) {
        console.log(err)
    }
}

allTypes();

module.exports = { allTypes } 