const express=require('express');
const {ShopModel}=require('../Models/shopdata')



const shopRoute=express.Router();


shopRoute.get('/shop',async(req,res)=>{

    try {
        const getshopdata=await ShopModel.find();
        res.json({data:getshopdata})
        
    } catch (error) {
        res.send({msg:error.message})
    }
})

shopRoute.post('/createShopdata',async (req,res)=>{
    try {
        const newdata=new ShopModel(req.body)
        newdata.save();
        res.send({msg:"new Shopdata is added"})
    } catch (error) {
        res.send({error:error.message})
    }
} )

module.exports={shopRoute}