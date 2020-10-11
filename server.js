const express=require('express')
const app=express()
const connectDB=require('./config/connectDB')
const authRouter=require('./routes/auth')
const productRouter=require('./routes/product')
const cartRouter=require('./routes/cart')

app.use(express.json())
connectDB()

app.use('/api/users',authRouter);

app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)

// listen app
 const port=process.env.PORT||5000;
app.listen(port,(err)=>{
    err ? console.log("server is not running") :console.log(`server is running on port ${port}`)
})