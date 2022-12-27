const { DataTypes} = require('sequelize');

module.exports = (sequelize)=>{ 
    sequelize.define('user', {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    })

}