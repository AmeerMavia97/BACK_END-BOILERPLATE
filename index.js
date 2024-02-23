const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = process.env.PORTS
require('dotenv').config()


app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})



const connectDb = async ()=>{
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log('CONNECTDATA BASE');
    
  } catch (error) {
    console.log(error);
    
  }
}

connectDb().then(()=>{
  app.listen(process.env.PORTS)
  
})


