//import express 
const express = require('express')
const app = express() 

const port = 4000 

app.get('/', (req, res) => {
  res.send("<h2> Library Software. </h2>") 
}) 

app.listen(port, () => console.log(`Server listening on port ${port}`))
