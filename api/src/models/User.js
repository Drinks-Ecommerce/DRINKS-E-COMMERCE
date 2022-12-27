<<<<<<< HEAD
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
=======
const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define('user', {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
};


>>>>>>> f6f2565e2914241bf1fd96f92430fe35d8681c28
