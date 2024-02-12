const mongoose=require('mongoose');

const networthySchema=mongoose.Schema({
    imgurl:{type:String},
    title:{type:String}
})

const NetworthyModel=mongoose.model("networthy",networthySchema);

module.exports={NetworthyModel}