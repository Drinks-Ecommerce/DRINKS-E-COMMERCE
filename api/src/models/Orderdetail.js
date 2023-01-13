const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'orderdetail', {
            
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
          
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
         
        },
        },
        { timestamps: false }
    );
};