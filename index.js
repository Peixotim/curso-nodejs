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
  const level = parseInt(req.query.level)

  if(DB.pokemons.length === 0){
    return res.status(404).json({
      message:`There are no Pokémon registered !`
    })
  }

  if(level){
    const findLevelPokemons = DB.pokemons.find(pokemon => pokemon.level === level);
    if(!findLevelPokemons){
      res.status(400)
      return res.json({
        message:`Error, pokemon not found !`
      })
    }
    res.status(200);
    return res.json({
      pokemons: findLevelPokemons
    })
    
  }
  res.status(200).json(DB.pokemons)
})

//Get One
app.get('/pokemons/:id' , async (req,res) => {
  const id = parseInt(req.params.id);

  if(!id && isNaN(id)){
    return res.status(400).json({
      message:`Error , Bad Request !`
    })
  }

  const pokemon = DB.pokemons.find(pokemon => pokemon.id === id)

  if(pokemon === undefined){
   return res.status(404).json({
      message:`Pokemon Not Found !`
    })
  }

  res.status(200).json(pokemon)
})

//Post
app.post('/pokemons' , (req,res) =>{
  const {id,name,level} = req.body;

  if(DB.pokemons.find(pokemon => pokemon.id === id)){
   return res.status(409).json({
    message: 'Error, this id already registered!'
  })
  }

  const newPokemon = {
    id,
    name,
    level
  }

  DB.pokemons.push(newPokemon)

  res.status(201).json({
    message:`Pokemon Created !`,
    pokemon: newPokemon
  })
})

//Delete
app.delete('/pokemons/:id' , (req,res) =>{
  const id = parseInt(req.params.id);
  
  const find = DB.pokemons.find(pokemon => pokemon.id === id);

  if(find === undefined){
    res.status = 404;
    res.json({
      message:`Pokemon Not Found !`
    })
  }

  let index = DB.pokemons.indexOf(find);
  
  DB.pokemons.splice(index,1);


  res.status(204).json({
    message:`Pokemon Deleted`,
    pokemons : DB.pokemons
  })
})