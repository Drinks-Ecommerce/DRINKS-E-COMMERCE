import Sequelize, { HasMany } from "sequelize";

export const sequelize = new Sequelize(
    'ecommerce',
    'postgres',
    'Pocahontas22xtt',
    {
        host: 'localhost',
        dialect: 'postgres',
    }
)

// RELATIONS
