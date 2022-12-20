import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const TypeDrink = sequelize.define('typeDrinks', {
    name: {
        type: DataTypes.STRING
    }
})