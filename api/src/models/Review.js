const { DataTypes} = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('review', {
        userId: {
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        calification: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: {args: [1, 5],}
            }
        },
        comment:{
            type: DataTypes.TEXT,
        }
    })
};