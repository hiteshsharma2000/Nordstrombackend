const express=require('express')

const {BannerModel}=require('../Models/bannerModel')

const bannerRoute=express.Router();

bannerRoute.get('/',async (req,res)=>{
    try {
        
     const Bannerdata=await BannerModel.find();

     res.send({data:Bannerdata})

    } catch (error) {
        res.send({error:error.message})
    }
})

bannerRoute.post('/create',async (req,res)=>{
    try {
         const newbanner=BannerModel(req.body);
        await newbanner.save();
        res.send({msg:"banner data has been created"})

    } catch (error) {
        res.send({error:error.message})
    }
})

module.exports={bannerRoute}