const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('orderdetail', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
            
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
        img:{
            type:DataTypes.TEXT
        },
        name:{
            type:DataTypes.STRING
        },
        priceProduct:{
            type:DataTypes.DECIMAL
        }
        },
        { timestamps: false }
    );
};