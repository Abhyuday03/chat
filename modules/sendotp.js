module.exports=function sendotp(otpgenerated,number_mo)
{
const fast2sms = require('fast-two-sms');
var options = {authorization :"1nvG7W2HFKcYXNVJTzujf6rgsCmRiwbq05QPxIy4eBEAOaSl9kszSKbaGQiWxBnRtewcmLDANF5huUHJ"  , message : 'hehe your otp is '+otpgenerated ,  numbers : [number_mo]} 
fast2sms.sendMessage(options).then(response=>{
console.log(response);
});
}