const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const morgan =require('morgan')
const dotenv=require('dotenv')


 dotenv.config({path:'config.env'})

 const connectdb =async () => {
  try{
    mongoose.set('strictQuery',false)
    mongoose.connect(process.env.URL_NAM)
    console.log('done connect');
  }catch(err){
    console.log('errr connect');
    process.exit()
  }
 
}
connectdb()

const app =express();
app.use(bodyParser.json());


if (process.env.NODE_ENV ==='development') {
    app.use(morgan('dev'));
    console.log("node:${process.env.NODE_ENV }");
    
}

app.get('/', (req,res) =>{
  res.send("hi ibrahim")

})
const PORT = process.config.port || 8000;
app.listen(PORT, () => {
    console.log(`Server started on port`);
});