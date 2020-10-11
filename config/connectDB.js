const mongoose=require("mongoose")
 require('dotenv').config({path:'./config/.env'})

module.exports= async function () {
    try {
        await mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true,useUnifiedTopology: true ,useFindAndModify:false} )
        console.log(" The Database is connected")
    } catch (error) {
        console.log("The Database is not connected")
    }
}