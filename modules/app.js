
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const lodash= require("lodash");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
require('dotenv').config();
// const send_otp=require("otp.js");
// const user= require("user.js");


app.get("/",function(req,res)
{
  res.render("home"); 
});

app.get("/contact",function(req,res)
{
  res.render("about");
});

app.get("/signup",function(req,res)
{
  res.render("signup");
});






// app.post("/otpverification",function(req,res)
// {
//       const newuser= new user({
//         name: req.body.user_name,
//         email: req.body.user_email,
//         age:req.body.user_number,
//         contact:req.body.user_age,
//         verified:false,
//         otp:Math.floor(1000 + Math.random() * 9000)
//       });

//       newuser.save(function(err){
//         if (!err)
//         {
//           // sendotp(newuser.otp, newuser.age);
//           res.render("otpverify");
//         } 
//         else 
//         {
//           res.send(err);
//         }
//       });    
// });


app.listen(3000, function() {
  console.log("Server started on port 3000");
});