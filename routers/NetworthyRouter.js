const express=require('express');
const {NetworthyModel}=require('../Models/networthyModel')
const networthyRouter=express.Router();

networthyRouter.get('/',async (req,res)=>{
    try {
         const getnetworthydata=await NetworthyModel.find();
         res.send({data:getnetworthydata})
    } catch (error) {
        res.send({error:error.message})
    }
})

networthyRouter.post('/create',async (req,res)=>{
    try {
         const createnetworthy=new NetworthyModel(req.body)
         await createnetworthy.save();
         res.send({msg:"networthy created successfully"})
    } catch (error) {
         res.send({error:error.message})
    }
})


module.exports={networthyRouter}