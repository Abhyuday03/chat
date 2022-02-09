const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongodb=require('mongodb')
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
require('dotenv').config();
const fast2sms = require('fast-two-sms');

const MongoClient=mongodb.MongoClient
const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser: true},(error,client)=>{
  if (error) {
      return console.log('unable to connect')
  }
  console.log('connected')

  const db=client.db(databaseName)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function sendotp(number_mo,otpgenerated)
{
  var options = {authorization :"MQSbHk0Wxi8EJr5anKjmtFI2lz3vcqRO9LpUw6gCXudZf1DTeNUG47FqsIP3DcXvZSgTMxn0jfleQ1ur"  , message : 'hehe your otp is '+otpgenerated ,  numbers : [number_mo]} 
fast2sms.sendMessage(options).then(response=>{
  console.log(response);
});
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////// Mongoose connection ////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 


////////////////////////////////////////////////////////// function calls////////////////////////////////////////////////////
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




app.post("/otpverification",function(req,res)
{
      const newuser= {
        name: req.body.user_name,
        email: req.body.user_email,
        contact:req.body.user_number,
        age:req.body.user_age,
        verified:false,
        otp:Math.floor(1000 + Math.random() * 9000)
      }; 

      db.collection('users').insertOne(newuser,(error,result)=>{
        if (error) {
          return console.log('there was an error'+error)
        }
        sendotp(newuser.contact,newuser.otp)
        
        
     })
     res.render('otpverify')
    })
    
  })






















// app.get("/compose",function(req,res)
// {
//   res.render("compose");
// });

// app.post("/compose",function(req,res)
// {
  
//   let publishcontent =
//   {
//     head: req.body.title,
//     content: req.body.BODY
//   }
//   posts.push(publishcontent);
//   res.redirect("/");
 
// });


// app.get("/posts/:postname",function(req,res)
// {
//   const requested=lodash.lowerCase(req.params.postname);
//   posts.forEach(function(key)
//   {
//     const stored= lodash.lowerCase(key.head);
//     if (stored=== requested)
//     {
//       res.render("post",
//       {
//         request: key.head,
//         data: key.content
//       });
//     }

//   });

// });


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



app.listen(3000, function() {
  console.log("Server started on port 3000");
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
