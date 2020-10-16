const express = require('express');
const app =express();
const PORT = process.env.PORT ||3000;
const animals= require('./animals')
app.set('view engine', "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.get('/',(req,res)=>{
   res.send('hello world')
})

app.get('/api/animals',(req,res)=>{
  const templateVar ={animals:animals}
  res.render("animals_index" ,templateVar);
})

app.get('/api/animals/new',(req,res)=>{
  res.render('animal_new')
})

app.get('/api/animals/:id', (req,res)=>{
  const animal = animals.find(animal=>animal.id === parseInt(req.params.id))
  const templateVar = {animal: animal}
  if(!animal){
    res.status(404).send('The animal id was not found')
  }else{
    res.render("animal_each", templateVar)
  }

})

app.post('/api/animals', (req,res)=>{
  const animal = {
    id: animals.length +1,
    Btype: req.body.Btype,
    Stype: req.body.Stype,
    placeFound: req.body.placeFound,
    found: req.body.found,
    status: req.body.status,
    imageURL: req.body.imageURL,
    physical_conditon:req.body.physical_conditon,
    description: req.body.description
  };
  animals.push(animal);
  res.redirect('/api/animals');
})

app.listen(PORT, ()=>{
  console.log(`the app is listening on port ${PORT}....`)
})