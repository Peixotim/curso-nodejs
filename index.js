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