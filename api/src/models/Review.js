const { DataTypes} = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('review', {
        userId: {
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        calification: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: {args: [1, 5],}
            }
        },
       
    })
};