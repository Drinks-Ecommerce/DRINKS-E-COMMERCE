const { DataTypes } = require('sequelize');




module.exports = (sequelize) => {


    sequelize.define('cart', {
        
        total: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        timestamps: false
    }
    );
};