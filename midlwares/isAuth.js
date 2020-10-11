const jwt=require('jsonwebtoken')
const User=require('../models/User')

module.exports= async (req,res,next)=>{
   try {
    const token=req.headers["authorization"]
    if(!token) {
        res.status(401).send({msg:"Unauthorized"})
    }
    const decoded= await jwt.verify(token,process.env.secretKey)
    const user= await User.findById(decoded._id).select("-password")
     if(!user) {
        res.status(401).send({msg:"Unauthorized"}) 
     }
     req.user=user;
    console.log(decoded)
   } catch (error) {
     res.status(500).send({msg:"Unauthorized"})  
   }
next()
}