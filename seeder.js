const mongoose=require('mongoose');
const dotenv=require('dotenv');
const Pizza=require('./models/pizzaModel')
const Pizzas=require('./data/pizza-data')
const connectDB=require('./config/config')

dotenv.config();
connectDB();

const importData=async()=>{
    try{
        await Pizza.deleteMany();
        const sampleData=Pizzas.map(pizza=>{
            return{...pizza};
        });
        await Pizza.insertMany(sampleData);
        console.log('Data imported');
        process.exit();
    } catch(error){
        console.log(`${error.message}`)
        process.exit(1);
    }
}

const dataDestroy=()=>{}

if(process.argv[2]==='-d')
{
    dataDestroy();
}
else{
    importData();
}