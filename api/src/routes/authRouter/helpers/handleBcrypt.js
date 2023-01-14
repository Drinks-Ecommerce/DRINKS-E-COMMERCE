const bcrypt = require("bcryptjs"); // Libreria

// Encriptamos
const encrypt = async (password) => { // textoPlano
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

// Comparamos --> retorna un true y false
const comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

module.exports = { encrypt, comparePassword }