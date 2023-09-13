const Joi = require("joi")
const bcrypt = require('bcrypt')
const Users = require("../models/users")
const jwt = require('jsonwebtoken')
const config = require("../../config")



const signUp =  async(req, res)=>{
   try {
    
    const {  First_name,Last_name ,phone , email , password} = req.body 
    const schem = Joi.object ({
        First_name: Joi.string().max(32).required() ,
        Last_name: Joi.string().max(32).required(),
        phone: Joi.string().required() , 
        email: Joi.string() , 
        password: Joi.string().required(),
    })
        const {error} = schem.validate({First_name, Last_name ,phone , email , password})
        if(error) return res.send({message: error.message})
        const hashing = await bcrypt.hash(password, 12)

        data = await Users.create({First_name, Last_name ,phone , email , password: hashing})
        res.send({message:'success', data})
        

   } catch (error) {

    res.send({message: error.message})
    
   }
}


const signIn =  async(req, res)=>{
    try {
        const { email , password} = req.body

    const schem = Joi.object ({
        email: Joi.string() , 
        password: Joi.string().required(),
    })
    const {error} = schem.validate({email , password})
    if(error) return res.send({message: error.message})
    const data =await Users.findOne({email})
    const token =  jwt.sign(data.dataValues.id, config.jwt_secret)
  
    if(!await bcrypt.compare(password, data.dataValues.password))
    return res.send({message: 'Invalid email or password'}).status(401)

    res.send({message:'success', token})


        
    } catch (error) {
        res.send({message: error.message})
    }

}

module.exports = {
    signUp,
    signIn,
}