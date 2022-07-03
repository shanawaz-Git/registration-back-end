const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    fname:String,
    lname:String,
    uname:String,
    city:String,
    email:String
})

module.exports=mongoose.model('reginfo',userSchema);