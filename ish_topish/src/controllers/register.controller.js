const check_signup = require("../middleware/signup.valid")
const Users = require('../models/users')
const jwt = require('jsonwebtoken')

const config = require('../../config')

const signin = async (req, res)=>{
    try {
        const {email, password} = req.body;

        const data =await Users.find({email, password})
        
        if(!data.length) return res.send({message: 'email or password is not correct'})
        const token = jwt.sign(data[0].id, config.jwt_secret)
        res.send({message: 'success', token})

        
    } catch (error) {
      console.log(error)
        res.send({message: 'Internal server error'})
    }
}

const signup = async(req, res)=>{
      try {
       
        const {first_name , last_name, username, email, password} = req.body
        const result = check_signup(first_name,last_name, username, email, password)
        if(result != undefined)
        throw new Error(result)
        const data = (await Users.create({first_name,last_name, username, email, password}))
        res.send({message:'success', data})
       
      } catch (error) {
        res.send(error.message)

      }  
}

module.exports = {
    signin, 
    signup,
}