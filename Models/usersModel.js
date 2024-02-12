const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    Email:{type:String,required:true},
    password:{type:String,required:true}
})

const UserModel=mongoose.model('user',userSchema);

module.exports={UserModel}