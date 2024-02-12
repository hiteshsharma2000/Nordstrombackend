const mongoose=require('mongoose');

const sliderSchema=mongoose.Schema({
    imgurl:{type:String},
    title:{type:String},
    price:{type:String}
})

const SliderModel=mongoose.model("slider",sliderSchema )

module.exports={SliderModel}