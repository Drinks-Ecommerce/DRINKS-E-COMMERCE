const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        adult: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
    });
};



