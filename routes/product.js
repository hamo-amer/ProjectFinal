const express=require('express')
const router=express.Router()
const Product=require('../models/Product')
// test
router.get('/test',(req,res)=>{
res.send("success test")
})
// add product
router.post('/addproduct',(req,res)=>{
    const {name,price,description,image}=req.body;
    const newProduct=new Product({
       name,price,description,image 
    })
  newProduct.save()
  .then(doc=>res.send({msg:"product saved",doc}))
  .catch(err=>console.log("product is not saved"))
  })
// get all products
router.get('/all',(req,res)=>{
    Product.find()
    .then(doc=>res.send(doc))
    .catch(err=>console.log("error"))
});
// find one by id
router.get('/:_id',(req,res)=>{
    const {_id}=req.params;
    Product.findOne({_id})
    .then(doc=>res.send(doc))
    .catch(err=>console.log("error"))

})
router.delete('/delete/:_id',(req,res)=>{
const {_id}=req.params;
Product.findOneAndDelete({_id})
.then(doc=>res.send(doc))
.catch(err=>console.log("error"))
});
// update product
router.put('/upDate/:_id',(req,res)=>{
    const {_id}=req.params;
    const {name,price,description}=req.body;
    Product.findOneAndUpdate({_id},{$set:{name,price,description}})
    .then(doc=>res.send(doc))
    .catch(err=>console.log("error"))
})


module.exports=router;