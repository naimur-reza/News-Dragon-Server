const express = require('express')
const app = express()
const port = 5000;
const categories = require('./data/categories.json')
var cors = require('cors')
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello Darling')
})
app.get('/categories', (req, res) => {
    res.send(categories)
})
app.listen(port, () => {
    console.log("Boom, Running on",port);
})