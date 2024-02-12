const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
    imgurl:{type:String},
    title:{type:String},
    description:{type:String},
    price:{type:String}
})
const ProductModel=mongoose.model('product',productSchema)

module.exports={ProductModel}