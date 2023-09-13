const User = require('../models/users')
const config = require('../../config')
const jwt = require('jsonwebtoken')
const isAuth = async(req, res, next)=>{
 try {
    const token = req.headers.authorization
    const id = jwt.verify(token, config.jwt_secret)
    const data = await User.findById(id)
    console.log(data)
    if(data != undefined)
    return next()
    res.send({message:'invalid verifiy token'})
    
 } catch (error) {
    res.send(error.message)
    
 }

}
module.exports = isAuth;