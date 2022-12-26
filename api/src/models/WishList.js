import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const WishList = sequelize.define('wishList', {

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
},
{
    timestamps: false
}
);