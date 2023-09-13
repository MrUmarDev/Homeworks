const {Schema, model} = require('mongoose')

const schem = new Schema({
    first_name: {
    type: String,
    required: true    
    },
    last_name: {
        type:String,
        required:true
    },
    username:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
},
{
    timestamps:true,
})

module.exports = model("User", schem)