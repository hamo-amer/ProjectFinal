const express=require('express')
const router=express.Router();
const User=require('../models/User')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')
const {validator,loginRules,registerRules}=require('../midlwares/bodyValidator')
const isAuth=require('../midlwares/isAuth')


router.post('/register',registerRules(),validator, async (req,res)=>{
  const {name,email,password,phoneNumber,adress} = req.body;
  try {
    let user= await User.findOne({email})
    if(user) {
      res.status(400).send({msg:"user already exist"})
    }
    else {
      user = new User({
        name,email,password,phoneNumber,adress
      });
      // hash password
      const salt=10;
      const hashedPassword= await bcrypt.hash(password,salt)
      user.password=hashedPassword;
      // save user
      await user.save()
      // login after register
      const payload={
        _id:user._id
      }
      const token= await jwt.sign(payload,process.env.secretKey)
      res.status(200).send({msg:"Login success",user,token})
    }
    
  } catch (error) {
    res.status(500).send({msg:"server error"});
  }
})
//Login
router.post('/login',loginRules(),validator, async (req,res)=>{
  const {email,password}=req.body;
  try {
    const user= await User.findOne({email})
    if(!user) {
      res.status(400).send({msg:"Bad Credentials"})
    }
    const isMatch= await bcrypt.compare(password, user.password);
    if(!isMatch) {
      res.status(400).send({msg:"Bad Credentials"})
    }
    // given token
    const payload={
      _id:user._id
    }
    const token= await jwt.sign(payload,process.env.secretKey)
    res.status(200).send({msg:"Login success",user,token})
  } catch (error) {
    res.status(500).send({msg:"server error"});
  }
});
router.get('/me',isAuth,(req,res)=>{
  res.status(200).send({user:req.user})
})
// Delete user
router.delete('/delete/:_id',(req,res)=>{
  let {_id}=req.params;
  User.findOneAndDelete({_id})
  .then(()=>res.send("user is deleted"))
  .catch(error=>console.log(error))
});
// Edit user
router.put('/edit/:_id',registerRules(),validator, async(req,res)=>{
  let {_id}=req.params;
  let {name,email,phoneNumber,password,adress}=req.body;
  const salt=10;
    const hashedPassword= await bcrypt.hash(password,salt)
    password=hashedPassword;
  try {
  const user= await User.findOneAndUpdate({_id},{$set:{name,email,phoneNumber,password,adress}})
    res.status(200).send({msg:"update user with success",user})
  } catch (error) {
    res.status(500).send({msg:"sever error"})
  }  
})


module.exports=router