const { DataTypes} = require('sequelize');


module.exports = (sequelize)=>{ 
    sequelize.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description:{
        type:DataTypes.STRING
    },
    img:{
        type:DataTypes.STRING
    },
    comments:{
        type:DataTypes.STRING
    }
},
    {
        timestamps: false
    })

}

