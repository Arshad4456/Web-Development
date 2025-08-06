const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
// app.use(express.static("public"))

// middleware 1  (logger of our application)
app.use((req, res, next) => {
    console.log(req.headers)
    req.arshad = "I am Arshad"
fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}\n`)
//   console.log('m1')
  next()
})

app.use((req, res, next) => {
  console.log('mw2')
//   res.send("response of middleware 2")
  next()
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello World!' + req.arshad)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})