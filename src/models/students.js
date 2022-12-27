const mongoose = require("mongoose");
const validator = require("validator");

const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email already eists"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    phone:{
        type:String,
        required:true,
        unique:true,
        maxLength:10,
        minLength:10
    },
    address:{
        type:String,
        required:true,
        maxLength:200,
        trim:true
    },
    FatherName:{
        type:String,
        required:true,
        maxLength:50,
        trim:true
    },
    MotherName:{
        type:String,
        required:true,
        maxLength:50,
        trim:true
    }
});

const Student = new mongoose.model("Student",StudentSchema);

module.exports=Student;