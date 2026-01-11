const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    firstName: {
         type: String,
         required: true,
         minlength: 3,
         maxlength: 20
         },
    lastName: { 
        type: String,
        default: "nanu"
        
    },
    age:{
        type: Number,
        min:14,
        max:70
    },
    gender:{
        type: String,
        lowercase: true,
        // enum:["Male", "Female", "Other"],
        validate(value){
             if(!["male", "female", "other"].includes(value)){
                throw new Error("Gender must be Male, Female or Other");
             }  
            }
    },
    emailId:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        immutable: true,
    },
    password:{
        type: String,
    },
    photo:{
        type: String,
    }

},{timestamps:true});
const User= mongoose.model('User', userSchema);
module.exports = User