const Joi = require('joi')
const check_findJob = (user_id, target, user_salary, description) =>{
    console.log(user_id, target, user_salary, description)
    const schem = Joi.object({
        user_id: Joi.string().required(),
        target: Joi.string().required().min(4),
        user_salary: Joi.number().required(),
        description: Joi.string().required(),
    })
    const {error} = schem.validate({user_id, target, user_salary, description})
    console.log()

    return error
}

module.exports = check_findJob;