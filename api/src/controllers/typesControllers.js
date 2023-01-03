const { Type } = require("../db");

const allTypes = () => {
    try {
        const typesDB = Type.findAll();
        if (!typesDB.length) {

            const types = ["tinto", "blanco"];

            types.map(async (e) => {
                await Type.findOrCreate({
                    where: { name: e }
                })
            })
            return types
        }

        else {
            return typesDB;

        }
    } catch (err) {
        console.log(err)
    }
}

allTypes();

module.exports = { allTypes }    