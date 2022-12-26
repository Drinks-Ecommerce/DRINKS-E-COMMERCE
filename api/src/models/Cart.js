import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const Cart = sequelize.define('cart', {

    id: {
        type:DataTypes.STRING,
        allowNull: false,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    productId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{
    timestamps: false
}
);