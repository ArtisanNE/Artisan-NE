const mongoose=require('mongoose');
const { type } = require('os');

const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    address: {
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
});


module.exports=mongoose.model('User',userschema);