const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 50],
                    msg: "The username must have a range of 3 to 50 characters"
                }
            }
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "The email must be a valid email"
                },
                len: {
                    args: [3, 255],
                    msg: "The email must have a range of 3 to 50 characters"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img:{
            type:DataTypes.TEXT,
            defaultValue:"https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png"
        },
        adult: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true
        },
        is_banned:{
            type:DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
};




