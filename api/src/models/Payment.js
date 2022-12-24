import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const Payment = sequelize.define('payment', {

    id: {
        type:DataTypes.STRING,
        allowNull: false,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
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