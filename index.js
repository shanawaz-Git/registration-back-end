const express=require('express');
const cors=require('cors');
require('./DB/config');
const User=require('./DB/User');
const app=express();

app.use(express.json());
app.use(cors());

app.post('/reg',async(req,res)=>{
    let user=new User(req.body);
    let result=await user.save();
    res.send(result);
    console.log(result);
})



app.listen(5000);