
const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('role', {

        name: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },
        {
            timestamps: false
        })
}

