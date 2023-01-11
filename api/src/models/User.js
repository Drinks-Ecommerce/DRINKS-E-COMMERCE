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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "The email must be a valid email"
                },
                len: {
                    args: [3, 50],
                    msg: "The email must have a range of 3 to 50 characters"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        adult: {
            type: DataTypes.BOOLEAN,

            allowNull: true
        },

    });
};




