const express = require('express')
const app = express()
const port = 8080

app.listen(port , () =>{
  console.log(`Server is running port ${port}`)
})


app.get('/health' , (req,res) =>{

  res.json({
    message:`Server is live !`
  })
})


//Route Params
app.get('/user/:name' , (req,res) => {
  const {name} = req.params;

  if(!name){
    res.json({
      message:`Hello user !`
    })
  }

  res.json({
    message:`Hello your name is ${name}`
  })
})


 app.get('/user' , (req,res)  =>{
  const {name, age} = req.query;
  res.json({
      message:`Hello ${name} , your age is ${age}`
  })
})