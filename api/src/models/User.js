import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const User = sequelize.define('user', {

    id: {
        type:DataTypes.STRING,
        allowNull: false,
        autoIncrement: true,
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
});