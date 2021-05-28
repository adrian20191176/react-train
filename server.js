const express = require('express');

const app = express();
app.get('/',(req,res)=>{res.json("Hi")});
const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{console.log(`Server connected to ${PORT}`)});