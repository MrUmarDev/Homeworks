const {model, Schema} = require('mongoose')

const schem = new Schema({
    user_id:{
        type:String,
        required:true
    },
    target:{
        type:String,
        required:true,
    },
    user_salary:{
        type:Number, 
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    },
      {
    timestamps:true,
     })

module.exports = model("Job", schem)