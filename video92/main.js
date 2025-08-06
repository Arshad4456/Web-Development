const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    //   res.sendFile("templates/index.html", {root: __dirname})
    let siteName = "Adidas";
    let searchText = "Search Now";
    let arr = ["hey", 44, 55, 66, "Rawyan"]
    res.render("index", { siteName: siteName, searchText: searchText, arr})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas why and when?"
    let blogContent = "Its a very good brand"
    res.render("blogpost", { blogTitle: blogTitle, blogContent: blogContent })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

