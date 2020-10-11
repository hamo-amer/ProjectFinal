const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const cartSchema=new Schema({
    userName:String,
    userPhone:Number,
    products:[String],
    totalPrice:Number
})
module.exports=mongoose.model("Cart",cartSchema)