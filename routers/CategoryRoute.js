const express=require('express');
const {CategoryModel}=require('../Models/CategoryModel');



const categoryRoute=express.Router();


categoryRoute.get('/category',async(req,res)=>{

    try {
        const getcategorydata=await CategoryModel.find();
        res.json({data:getcategorydata})
        
    } catch (error) {
        res.send({msg:error.message})
    }
})

categoryRoute.post('/createCategorydata',async (req,res)=>{
    try {
        const newdata=new CategoryModel(req.body)
        newdata.save();
        res.send({msg:"new category is added"})
    } catch (error) {
        res.send({error:error.message})
    }
} )

module.exports={categoryRoute}