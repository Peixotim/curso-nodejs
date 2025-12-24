const express = require('express')
const app = express()
const port = 8080

app.use(express.json())

app.listen(port , () =>{
  console.log(`Server is running port ${port}`)
})


app.get('/health' , (req,res) =>{

  res.json({
    message:`O servidor está online na porta ${port}!`
  })
})


let DB = {

  pokemons:[
    {
      id: 1,
      name: 'Charizard',
      level : 20,
    },
    {
      id:2, 
      name: 'Lucario',
      level:40, 
    },
    {
      id:3,
      name:'Pikachu',
      level:10
    }
  ]
}

//Get - All
app.get('/pokemons' , (req,res) => {

  res.statusCode = 200;
  res.json(DB.pokemons)
})


app.get('/pokemons/:id' , async (req,res) => {
  const id = parseInt(req.params.id);

  if(!id && isNaN(id)){
    res.statusCode = 400
    res.json({
      message:`Error , Bad Request !`
    })
  }

  const pokemon = DB.pokemons.find(pokemon => pokemon.id === id)

  if(pokemon === undefined){
    res.status  = 404
    res.json({
      message:`Pokemon Not Found !`
    })
  }
  res.json(pokemon)
})

app.post('/pokemons' , (req,res) =>{
  const {id,name,level} = req.body;

  if(DB.pokemons.find(pokemon => pokemon.id === id)){
    res.status = 409
    res.json({
      message:`Error , this id already registred !`
    })
  }

  const newPokemon = {
    id,
    name,
    level
  }

  DB.pokemons.push(newPokemon)

  res.status = 201
  res.json({
    message:`Pokemon Created !`,
    pokemon: newPokemon
  })
})