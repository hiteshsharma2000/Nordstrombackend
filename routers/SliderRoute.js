const mongoose=require("mongoose");
const express=require('express');
const { SliderModel } = require("../Models/Slidermodel");

const sliderRouter=express.Router();


sliderRouter.post('/creteslider',async(req,res)=>{
 try {
        const newslider=new SliderModel(req.body)
        newslider.save();
        res.json({mag:"new slider data is saved succesfully"})
    } catch (error) {
        res.send({"error":error.message})
    }
})
sliderRouter.get('/getslider',async(req,res)=>{
 try {
      const sliderdata=await SliderModel.find()
        res.json({detail:sliderdata})
    } catch (error) {
        res.send({"error":error.message})
    }
})


module.exports={sliderRouter}