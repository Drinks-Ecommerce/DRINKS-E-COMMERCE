const { DataTypes } = require('sequelize')

module.exports = function(sequelize){
    return sequelize.define('productcart', {
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        totalValue: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}