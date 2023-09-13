const {Sequelize} = require("sequelize")
const config = require('../config')

const sequelize = new Sequelize(config.db_getway)

module.exports = sequelize