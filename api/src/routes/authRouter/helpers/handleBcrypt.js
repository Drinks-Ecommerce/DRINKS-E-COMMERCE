const bcrypt = require("bcryptjs"); // Libreria

// Encriptamos
const encrypt = async (password) => { // textoPlano
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

// Comparamos
const comparePassword = async (password, receivedPassword) => {
    
}

module.exports = { encrypt}