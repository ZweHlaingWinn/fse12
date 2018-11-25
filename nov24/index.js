const express = require('express'),
        app = express(),
        url = require('url'),
        mongoose = require('mongoose'),
        port = 3000,
        Category = require('./model/category')

app.get('/', function (req, res) {
    res.end("Welcome to bookstore API")
})

app.get('/api/books', function (req, res) {
    res.end("Get ALL books")
})

app.get('/api/categories', function (req, res) {
    Category.getCategories(function (error, category) {
        console.log(error, category)
        res.end("category")
    })
})

app.listen(port, ()=> console.log(`Server Started at ${port}`));