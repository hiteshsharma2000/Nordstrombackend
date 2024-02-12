const express=require('express');
const {ProductModel}=require('../Models/productModel')
const {auth}=require('../Middleware/auth')
const productRoute=express.Router();

productRoute.get('/product',auth,async(req,res)=>{
    try {
        const productdata=await ProductModel.find();
        res.json({data:productdata})
        
    } catch (error) {
        res.send({error:error.message})
    }
})
productRoute.post('/createproduct',async (req,res)=>{
    try {
        const newproduct=new ProductModel(req.body);
        await newproduct.save();
        res.send({msg:"new product has been added"})

        
    } catch (error) {
        res.send({error:error.message})
    }
})

module.exports={productRoute}