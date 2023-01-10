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
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    description:{
        type:DataTypes.TEXT
    },
    img:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    comments:{
        type:DataTypes.TEXT
    },
    calification:{
        type:DataTypes.STRING
    },
    brand:{
        type:DataTypes.STRING
    },
    discount:{
        type:DataTypes.INTEGER
    },
    origin:{
        type:DataTypes.STRING
    },
    alcohol:{
        type:DataTypes.FLOAT
    },
},
    {
        timestamps: false
    })

}