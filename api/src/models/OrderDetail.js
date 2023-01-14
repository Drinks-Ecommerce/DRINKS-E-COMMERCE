const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('orderdetail', {
            
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        },
        { timestamps: false }
    );
};