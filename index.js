const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = process.env.PORTS
require('dotenv').config()
const {addStudent , getStudent , deleteStudent , editStudent} = require('./controllers/studentcontroller')


app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/api/v1/students' , getStudent)
app.post('/api/v1/students' , addStudent)
app.delete('/api/v1/students:id' , deleteStudent)
app.put('/api/v1/students:id' , editStudent)




const connectDb = async ()=>{
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log('CONNECTDATA BASE');
    
  } catch (error) {
    console.log(error);
    
  }
}

connectDb().then(()=>{
  app.listen(process.env.PORTS )
  
})


