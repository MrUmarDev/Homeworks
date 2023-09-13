const Joi = require('joi')

const check_signup = (first_name , last_name, username, email, password)=>{
  
    const schem = Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        username: Joi.string().required(),
        email: Joi.string().email(),
        password: Joi.string().required().min(4)
    })

    const {error} = schem.validate({first_name , last_name, username, email, password})

    return  error
}


module.exports = check_signup;