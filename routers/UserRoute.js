const express=require('express');
const bcrypt=require('bcrypt')
const {UserModel}=require('../Models/usersModel')
const jwt = require('jsonwebtoken');
const {auth}=require('../Middleware/auth')
const userRoute=express.Router();


userRoute.get('/',auth,async (req,res)=>{
    try {
        const getuser=await UserModel.find()
        res.send({users:getuser})
        
    } catch (error) {
        res.send({error:error.message})
    }
})


userRoute.post('/register',async (req,res)=>{
    try {
        const {firstname,lastname,Email,password}=req.body;
        bcrypt.hash(password, 5, function(err, hash) {
           if(err){
            res.send({msg:"something went wrong in hashing"})
           }else{
            const newuser=new UserModel({"firstname":firstname,"lastname":lastname,"Email":Email,"password":hash});
             newuser.save();
            res.send({mag:'new user has been register successfully'})
           }
        });
      
        
    } catch (error) {
        res.send({error:error.message})
    }
})

userRoute.post('/login',async (req,res)=>{
    const {Email,password}=req.body;
    try {
       const finduser=await UserModel.findOne({Email})
       if(finduser){
        bcrypt.compare(password, finduser.password,function(err, result) {
            if (result){
                const token = jwt.sign({ "user":finduser._id,"firstname":finduser.firstname}, 'loginuser',{expiresIn:"1h"});
                  res.send({msg:"login successfully","token":token})
             }else{
                res.send({msg:"invalid password"})
            }
        })
       }else{
        res.send({msg:"user is not found"})
       }
    } catch (error) {
       res.send({error:error.message})
    }
 })
module.exports={userRoute}