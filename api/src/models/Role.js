
const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('role', {
        name: {
            type: DataTypes.STRING,
            defaultValue:"user"
        }

    },
        {
            timestamps: true
        })
}

