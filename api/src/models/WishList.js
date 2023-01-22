const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define('wishlist', {
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
        {
            timestamps: false
        }
    );
};


