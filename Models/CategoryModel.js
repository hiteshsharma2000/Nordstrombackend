const mongoose=require('mongoose');

const categorySchema=mongoose.Schema({
    imgurl:{type:String},
    title:{type:String,unique:true}
  
})

const CategoryModel=mongoose.model("category" ,categorySchema);

module.exports={CategoryModel}