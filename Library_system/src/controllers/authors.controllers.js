const Authors = require('../models/author')
const path = require('path')
const {v4:uuid} = require('uuid')
const Joi = require('joi')





const getAll = async(req, res) =>{
    data = await Authors.findAll()
    console.log(data)
    res.send({message: data}).status(200)
}


const create = async(req, res)=>{
    const {firstName, lastName,date_death,date_birth,country, bio} = req.body
    const schem = Joi.object({
        firstName: Joi.string().required().min(1),
        lastName: Joi.string().required(),
        date_birth: Joi.string().required(), 
        date_death: Joi.string().required(), 
        country: Joi.string().required(), 
        bio: Joi.string().required(), 
    })
    const {error} = schem.validate({
        firstName, 
        lastName,
        date_death,
        date_birth,
        country, 
        bio
    })
    
    if(error) return res.json({message: error.message})
    const img = req.files?.img
    if(img == undefined)
    return res.json({message:"File does not exists"})
    const newFile = uuid()+path.extname(img.name)
    img.mv(process.cwd()+`/uploads/${newFile}`)
    const data  = await Authors.create({
        first_name:firstName, 
        last_name:lastName,
        date_death,
        date_birth,
        country, 
        bio,
        img_name: newFile
    })

    res.json({message: 'success', data})

}


const getOne = async(req, res) =>{
    const {id} = req.params
    data = await Authors.findOne({id})
    res.send({data}).status(200)
}


module.exports = {
    create,
    getAll,
    getOne
}