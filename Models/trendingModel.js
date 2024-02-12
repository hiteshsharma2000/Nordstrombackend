const mongoose=require('mongoose');
const trendingSchema=mongoose.Schema({
    imgurl:{type:String},
    title:{type:String},
    price:{type:String}
})

const TrendingModel=mongoose.model("trending",trendingSchema)

module.exports={TrendingModel}