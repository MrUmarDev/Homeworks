const config = require('../config')
const {connect} = require('mongoose')
const User = require('./models/users')

const router = require('./routers')

const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api', router)
const bootstrap = async()=>{
    connect(config.mongoDB)
    app.listen(config.port , ()=>{
        console.log(`server is running on ${config.port}`)
    })

}

bootstrap()

