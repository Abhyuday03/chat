const mongoose = require('mongoose');
const { random } = require("lodash");
const res = require("express/lib/response");
mongoose.connect("mongodb://localhost:27017/carDB"), { useNewUrlParser: true };
const userschema= 
{
    name: String,
    email:String,
    contact:String,
    age:Number,  
    otp: Number,
    verified:Boolean
};
const user= mongoose.model("User",userschema);
module.exports=user;