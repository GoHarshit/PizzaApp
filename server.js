const express=require('express');
const morgan=require('morgan');
require('colors');
const connectDB=require('./config/config');
const dotenv=require('dotenv');
const path=require('path')

dotenv.config();
connectDB();
const app=express();

app.use(express.json());
app.use(morgan('dev'))

//route
app.use('/api/pizzas',require("./routes/pizzaRoute"));
app.use('/api/users',require("./routes/userRoutes"));
app.use('/api/orders',require("./routes/orderRoute"));

if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'/pizza-shop/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,"pizza-shop","build","index.html"))
    })
}else{
    app.get('/',(req,res)=>{
        res.send('<h1>Hello from node server</h1> ')
    })
}

const port=process.env.PORT || 8080
app.listen(8080, ()=>{
    console.log(`server running on ${process.env.NODE_ENV} mode on port number ${process.env.PORT} `);
});
