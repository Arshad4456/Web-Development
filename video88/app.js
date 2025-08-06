const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello, World from Express!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

//const express = require('express')
//const app = express();
// const port= 3000;

app.get('/about', (req , res) =>{
    res.send("this is about section");
});

// app.get('/contact', (req , res) =>{
//     res.send("this is the contact section");
// });

app.get('/contact/:slug', (req , res) =>{
    console.log(req.params)
    console.log(req.query)
    res.send(`this is the contact section ${req.params.slug}`);
});




// app.listen(port, () => {
//     console.log('server is running at http://localhost:${port}')
// })