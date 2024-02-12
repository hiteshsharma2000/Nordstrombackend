const express=require('express');

const {NetsliderModel}=require("../Models/NetSliderModel")


const netsliderRouter=express.Router();

netsliderRouter.get('/',async (req,res)=>{
    try {
        
     const getsliderdata=await NetsliderModel.find();

     res.send({data:getsliderdata})

    } catch (error) {
        res.send({error:error.message})
    }
})

netsliderRouter.post('/create',async (req,res)=>{
    try {
         const newslider=NetsliderModel(req.body);
        await newslider.save();
        res.send({msg:"slider data hab been created"})

    } catch (error) {
        res.send({error:error.message})
    }
})



module.exports={netsliderRouter}