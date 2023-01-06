const { DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('carrusel',{
        img: {
            type: DataTypes.TEXT
        }
    });
};