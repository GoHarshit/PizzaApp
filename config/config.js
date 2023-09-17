const mongoose= require('mongoose');
require('colors');


const connectDB= async ()=>{
    try{
        const url=process.env.MONGO_URI 
        const conn= await mongoose.connect(url,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
           
        })
        console.log(` mongo connected ${conn.connection.host}`)
    } catch(error){
        console.log(`eroor: ${error.message}`);
    }
}

module.exports=connectDB;