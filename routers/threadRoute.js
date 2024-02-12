const express=require('express');

const {ThreadModel}=require('../Models/thethreadModel')

const threadRoute=express.Router();

threadRoute.get('/',async (req,res)=>{
   try {
        const getthread=await ThreadModel.find();
        res.send({data:getthread})

   } catch (error) { 
    res.send({error:error.message})
   }
})
threadRoute.post('/create',async (req,res)=>{
   try {
        const getthread=new ThreadModel(req.body);
        await getthread.save()
        res.send({msg:"new thread has been created"})

   } catch (error) { 
    res.send({error:error.message})
   }
})

module.exports={threadRoute}