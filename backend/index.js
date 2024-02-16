//creating & listening on server
const express =  require("express");
const app=express();
const port= 5500;
const cors=require("cors");
app.use(express.json())
app.use(cors())
app.listen(port,(req,res)=>console.log(`app is listening on port number ${port}`))

//calling database & creating the connection
const mongoose= require("mongoose");
mongoose.connect('mongodb+srv://patmax3050:Pritam6699@cluster0.mg3glix.mongodb.net/LOGINREGISTRATION?retryWrites=true&w=majority')
.then(()=>{console.log("database connection success")})
.catch((err)=>{console.log(`erroronnecting db => ${err}`)})
//schema & model
const schemas=new mongoose.Schema({
name:String,
email:String,
password:String
})
const detailModel=mongoose.model("detail",schemas);
 
//login 
app.post('/login',async(req,res)=>{

    const {email,password}=req.body
    let existUser;
    try {
        existUser=await detailModel.findOne({email})
    } catch (error) {
       return console.log("err") 
    }

    if(!existUser){
return res.send("login fail")
    }
    if(existUser.password==password){
return res.send("login success")  
    }
    else{
        return res.send("worng password")
    }
})
//register


app.post('/register',async(req,res)=>{
    const {email,password,name}=req.body
    let existUser;
    try {
        existUser=await detailModel.findOne({email})
    } catch (error) {
        
       return console.log("err") 
  
    }

    if(!existUser){
        const user=new detailModel({
            name,password,email
        })
        await user.save()
        return res.send("success register")
    }
    
    else{
        return res.send("user existed")
    }
})

