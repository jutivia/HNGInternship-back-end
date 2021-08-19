const mongoose= require('mongoose')

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please enter your name'],
        trim:true,
    },
            email:{
                type:String,
                 required:[true, 'Must Provide a valid email'],
                trim:true,
            },
            msg:{
                type:String,
                 required:[true, 'Must Enter A Message'],
                 trim:true,
            }
})

module.exports=mongoose.model('User', userSchema)