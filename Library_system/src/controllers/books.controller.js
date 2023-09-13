const Books = require("../models/books")
const path = require('path')
const {v4:uuid} = require('uuid')
const Joi = require('joi')





const getAll = async(req, res) =>{
    data = await Books.findAll()
    res.send({message: data}).status(200)
}


const create = async(req, res)=>{
    const {title, page, year, price, country, author, description} = req.body
    const schem = Joi.object({
        title: Joi.string().required().min(1),
        page: Joi.number().required(),
        year: Joi.number().required(), 
        price: Joi.number().required(), 
        country: Joi.string().required(), 
        author: Joi.string().required(), 
        description:Joi.string().required()
    })
    const {error} = schem.validate({
        title,
        page, 
        year, 
        price, 
        country, 
        author, 
        description})
    
    if(error) return res.json({message: error.message})
    const img = req.files?.img
    if(img == undefined)
    return res.json({message:"File does not exists"})
    const newFile = uuid()+path.extname(img.name)
    img.mv(process.cwd()+`/uploads/${newFile}`)
    const data  = await Books.create({
        title,
        page, 
        year, 
        price, 
        country, 
        author, 
        description,
        img_name: newFile
    })

    res.json({message: 'success', data})

}


const getOne = async(req, res) =>{
    const {id} = req.params
    data = await Books.findOne({id})
    res.send({data}).status(200)
}


module.exports = {
    create,
    getAll,
    getOne
}