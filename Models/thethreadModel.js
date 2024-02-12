const mongoose=require('mongoose');

const threadSchema=mongoose.Schema({
    imgurl:{type:String},
    title:{type:String},
    description:{type:String},
    para1:{type:String},
    para2:{type:String}
})
const ThreadModel=mongoose.model('thread',threadSchema);

module.exports={ThreadModel}