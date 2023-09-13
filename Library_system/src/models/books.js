const {Model, DataTypes, UUIDV4} = require('sequelize')
const sequelize = require('../../database')

class Books extends Model{}

Books.init({
    id:{
        type: DataTypes.TEXT,
        primaryKey:true,
        defaultValue: UUIDV4()
    },
    title:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    page:{
        type: DataTypes.INTEGER,
        allowNull:false,

    },
    year:{
        type:DataTypes.INTEGER, 
        allowNull:false,
    },
    price:{
        type:DataTypes.INTEGER, 
        allowNull:false,
    },
    country:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    author:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    img_name:{
        type:DataTypes.TEXT,
        allowNull:false,
    }

}, {
    updatedAt: 'updated_at',
    createdAt:'created_at',
    tableName:'books',
    modelName:'books',
    sequelize
})

module.exports = Books;