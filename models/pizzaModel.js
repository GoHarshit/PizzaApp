const mongoose=require('mongoose')

const pizzaSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    variants:[],
    prices:[],
    cateogory:{
        type: String,
        required:true,
    },
    Image:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
},
{timestamps:true}
);

const pizzaModel= mongoose.model('pizza',pizzaSchema);
module.exports= pizzaModel;