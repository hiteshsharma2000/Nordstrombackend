const mongoose=require('mongoose');

const netsliderSchema=mongoose.Schema({
    imgurl:{type:String},
    title:{type:String},
    description:{type:String},
    para1:{type:String},
    para2:{type:String}
})

const NetsliderModel=mongoose.model("netslider",netsliderSchema)

module.exports={NetsliderModel}