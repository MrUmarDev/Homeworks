const {Model, DataTypes, UUIDV4} = require('sequelize')
const sequelize = require('../../database')
const {v4:uuid} = require('uuid')
class Authors extends Model{}

Authors.init({
    id:{
        type:DataTypes.TEXT,
        primaryKey:true, 
        defaultValue:uuid() 
    },
    first_name:{
        type: DataTypes.TEXT,
        allowNull:false

    },
    last_name :{
        type: DataTypes.STRING,
        allowNull:false
    },
    bio :{
        type:DataTypes.STRING,
        allowNull:false
    },
    date_death:{
        type: DataTypes.TEXT,
        defaultValue: '0-0-0'
    },
    date_birth:{
        type:DataTypes.TIME,
        allowNull:false
    },
    country:{
        type: DataTypes.TEXT, 
        allowNull:false
    },
    img_name:{
        type:DataTypes.TEXT,
        allowNull:false,
    }
}, {
    createdAt:"created_at",
    updatedAt: 'updated_at',
    modelName:'authors',
    tableName:"authors",
    sequelize
})

module.exports = Authors;