require("dotenv/config")

const{ env} = process
const  config = {
    port: env.PORT,
    db_getway: env.DB_GETWAY,
    jwt_secret: env.JWT_SECRET_KEY
    
}

module.exports = config;