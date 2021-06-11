const express = require('express');
const connectDB = require('./config/db');   

const app = express();

//Connect Database 
connectDB();

//Init middleware
app.use(express.json({extended:false }));
app.get('/',(req,res)=>{res.json("Hi")});

//Define Routes 
app.use('/api/users',require('./Routes/api/users'))
app.use('/api/profile',require('./Routes/api/profile'))
app.use('/api/auth',require('./Routes/api/auth'))
app.use('/api/posts',require('./Routes/api/posts'))
const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{console.log(`Server connected to ${PORT}`)});