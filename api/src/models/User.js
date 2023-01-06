const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define('user', {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        adult: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        banned: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
};

