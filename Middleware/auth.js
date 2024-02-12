const jwt=require('jsonwebtoken')

const auth=(req,res,next)=>{
    const token =req.headers.authorization
try {
    jwt.verify(token, 'loginuser', function(err, decoded) {
       if (decoded){
        next()
       }else{
        res.send({msg:"login again"})
       }
       
    });
    
} catch (error) {
    res.send({error:error.message})
}
}
module.exports={auth}