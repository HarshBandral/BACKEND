const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello ')
})
app.get('/profile', function (req, res) {
    res.send('yo ')
    console.log("yo");
  })

  
app.listen(3000)