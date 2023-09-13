const check_findJob = require('../middleware/findJob.valid')
const findJob = require('../models/employeeOrEmployer')
const add = async(req, res) => {
    try {
        const {user_id, target, user_salary, description} = req.body
       
        const result = check_findJob(user_id, target, user_salary, description)
        console.log(result)
        if(result != undefined)
        throw new Error(result)
        const data = await findJob.create({user_id, target, user_salary, description})
        res.send({messag: 'success', data})


    } catch (error) {
        res.send(error.message)
    }
}
const get = async(req, res) => {
    try {
        data = await findJob.find()
        res.send({message:"success", data})
        
    } catch (error) {
        console.log(error)
    }
}
const getOne = async(req, res) => {
    try{
        
    } catch (error) {
        console.log(error)
    }
}
const remove = async(req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    remove,
    get ,
    add, 
    getOne
}