const { DataTypes} = require('sequelize');


module.exports = (sequelize) => {
    
    sequelize.define('payment', {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
/*         userId: {
            type: DataTypes.STRING,
            allowNull: false,
        }, */
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
    },
    {
        timestamps: false
    }
    );
};


