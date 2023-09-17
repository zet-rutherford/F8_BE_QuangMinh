const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/db')
const User = sequelize.define(
    "User",
    {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            unique:true
        },
        password:{
            type: DataTypes.STRING
        }
    },
    {
        timestamps:false,
    }
);
module.exports = User