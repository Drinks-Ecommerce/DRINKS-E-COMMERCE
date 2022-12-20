import { DataTypes } from "sequelize";
import { sequelize } from '../db/db.js';

export const Product = sequelize.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    amount: {
        type: DataTypes.STRING
    },
    worth: {
        type: DataTypes.INTEGER
    }
},
    {
        timestamps: false
    })

// RELATIONS
import { TypeDrink } from "./TypeDrink.js";

TypeDrink.hasMany(Product, {
    foreignKey: 'productId',
    sourceKey: 'id'
})

Product.belongsTo(TypeDrink, {
    foreignKey: 'productId',
    targetId: 'id'
})