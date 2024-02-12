const mongoose=require('mongoose');

const bannerSchema=mongoose.Schema({
    imgurl:{type:String},
    title:{type:String},
    description:{type:String},
    para1:{type:String},
    para2:{type:String}
})

const BannerModel=mongoose.model("bannerslider",bannerSchema)

module.exports={BannerModel}