const express = require('express');
const app =express();
const PORT = process.env.PORT ||3000;
const animals= require('./animals')
app.set('view engine', "ejs");
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
   res.send('hello world')
})

app.get('/api/animals',(req,res)=>{
  const templateVar ={animals:animals}
  res.render("animals_index" ,templateVar);
})

app.get('/api/animals/:id', (req,res)=>{
  const animal = animals.find(animal=>animal.id === parseInt(req.params.id))
  if(!animal){
    res.status(404).send('The animal id was not found')
  }else{
    res.render(animal)
  }

})

app.listen(PORT, ()=>{
  console.log(`the app is listening on port ${PORT}....`)
})