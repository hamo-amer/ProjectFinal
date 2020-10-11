const express=require('express');
const router=express.Router();
const Cart=require('../models/Cart')

router.post('/add',(req,res)=>{
    const {userName,userPhone,products,totalPrice}=req.body;
     const cart=new Cart({
            userName,userPhone,products,totalPrice
        }) 
   cart.save()
   .then(doc=>res.status(200).send({msg:"order success",doc}))
   .catch(error=>console.log(error))
})
module.exports=router;