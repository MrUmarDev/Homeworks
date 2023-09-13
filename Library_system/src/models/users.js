const {Model, DataTypes} = require('sequelize')
const sequelize = require('../../database')
const {v4:uuid} = require('uuid')

class Users extends Model{};

Users.init({
    id:{
        type:DataTypes.TEXT,
        primaryKey:true, 
        defaultValue:uuid() 
    },
    First_name:{
        type: DataTypes.TEXT,

    },
    Last_name :{
        type: DataTypes.STRING
    },
    phone :{
        type:DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING,
        unique:true
    },
    password:{
        type:DataTypes.STRING
    },
    isAdmin:{
        type: DataTypes.BOOLEAN, 
        defaultValue: false,
    }
}, {
    createdAt:"created_at",
    updatedAt: 'updated_at',
    modelName:'users',
    tableName:"users",
    sequelize
})
module.exports = Users;