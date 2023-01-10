const { Type } = require("../db");
const allTypes = async () => {
    try {
        const typesDB = await Type.findAll();
        if (!typesDB.length) {

            const types = ["vino", "espumante", "cerveza", "whisky", "gin", "ron", "vermouth", "cristaleria", "delicatessen"];

            types.map(async (e) => {
                await Type.findOrCreate({
                    where: { name: e }
                })
            })
            return types
        }
        else {
            return typesDB.map(e => e.name)
        }
    } catch (err) {
        console.log(err)
    }
}

allTypes();


module.exports = { allTypes }

