const express = require('express')
const app = express()
const port = 5000;
const categories = require('./data/categories.json')
const news = require('./data/news.json');
var cors = require('cors')
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello Darling')
})
app.get('/categories', (req, res) => {
    res.send(categories)
})
app.get('/categories/:category', (req, res) => {
    const id = req.params.category;
    if (id == 0) {
        res.send(news)
    }
    else {
        const element = news.filter(c => parseInt(c._id) === parseInt(id));
        res.send(element)
    }
})
app.get('/news', (req, res) => { 
    res.send(news)
})
app.get('/news/:id',(req, res) => {
    const id = req.params.id
    const element = news.find(newNews => newNews._id === id);
    res.send(element )
})
app.listen(port, () => {
    console.log("Boom, Running on",port);
})
