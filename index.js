const express = require('express');
const app =express();
const PORT = 3000;

app.get('/',(req,res)=>{
   res.send('hello')
})

app.get('/api/animals',(req,res)=>{
  res.send([1,2,3,4,5]);
})

app.listen(PORT, ()=>{
  console.log(`the app is listening on port ${PORT}`)
})