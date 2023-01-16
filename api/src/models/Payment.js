const { DataTypes} = require('sequelize');


module.exports = (sequelize) => {
    
    sequelize.define('payment', {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        paymentMethod: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        shippingMethod: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        numberAddress: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        province: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postalCode: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            defaultValue:'Pending',
        },
    },
    {
        timestamps: false
    }
    );
};


