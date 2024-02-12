const mongoose=require('mongoose');

const shopSchema=mongoose.Schema({
    imgurl:{type:String}
  
})

const ShopModel=mongoose.model("shop" ,shopSchema);

module.exports={ShopModel}