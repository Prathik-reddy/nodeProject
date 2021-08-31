const  mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,     
    },
    email:{
        type:String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email');
            }
        }
    },
    phone:{
        type: Number,
        required: true,    
        min:10, 
    },
    message:{
        type: String,
        required: true,    
        minLength:5,  
    },
    date:{
        type: Date,
        default: Date.now,
    }

})

const userdetails = mongoose.model("UserDetail",userSchema);
module.exports = userdetails;