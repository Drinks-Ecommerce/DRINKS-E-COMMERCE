const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define('wishlist', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
        {
            timestamps: false
        }
    );
};


