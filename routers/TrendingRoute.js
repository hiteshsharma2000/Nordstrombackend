const express=require('express');
const {TrendingModel}=require('../Models/trendingModel')
const trendingRoute=express.Router();

trendingRoute.get('/trending', async (req,res)=>{
    try {
        const gettrendingdata=await TrendingModel.find();
        res.json({data:gettrendingdata})

    } catch (error) {
        res.send({error:error.message})
    }
} )
trendingRoute.post('/createTrendingdata',async (req,res)=>{
    try {
        
        const newdata=new TrendingModel(req.body);
        newdata.save();
        res.json({msg:"New Trending data is created"})
    } catch (error) {
        res.send({error:error.message})
    }
})

module.exports={trendingRoute}