const config = require("../config")
const routers = require("./routers")


const express = require('express')
const sequelize = require("../database")
const fileUpload = require('express-fileupload')




const app = express()
app.use(express.json())
app.use(fileUpload())
app.use(express.urlencoded({extended:true}))


app.use('/api', routers)

const bootstrap = async()=>{
    sequelize.authenticate({
    logging:false,
    })
    sequelize.sync({
        alter:true,
        logging:false
    })
    app.listen(4000, ()=>{
        console.log(`Server is listening on ${config.port} port . . .`)
    })
}
bootstrap()
