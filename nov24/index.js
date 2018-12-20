const express = require('express'),
        app = express(),
        url = require('url'),
        bodyParser= require('body-parser'),
        mongoose = require('mongoose'),
        port = 3000

 const  Category = require('./model/category')
const  Book = require('./model/book')

    //nov 25 update code
mongoose.connect(`mongodb://localhost/bookstore`, error => console.error(error));


app.get('/',  (req, res) => res.end("Welcome to bookstore API"))

// app.get('/api/books', function (req, res) {
//     res.end("Get ALL books")
// })





app.get('/api/categories', function (req, res) {
    Category.getCategories(function (error, data) {
        // console.log(error, category)
        res.json(data).end()
    })
})

app.get('/api/categories/:id', function (req, res) {
    parseURL = url.parse(req.url)
    Category.getCategoryById(function (error, data) {
        res.json(data).end()
    })
})

app.get('/api/categories/:id', function (req, res) {
    parseURL = url.parse(req.url)
    Category.getCategoryById(parseURL.id,function (error, data) {
        res.json(data).end()
    })
})

app.get('/api/books', function (req, res) {
    Book.getBooks(function (error, data) {
        res.json(data).end()
    })
})

app.get('/api/books/:id', function (req, res) {
    parseURL = url.parse(req.url)
    Book.getBookById( parseURL.id, function (error, data) {
        res.json(data).end()
    })
})

app.get('/api/books/:id', function (req, res) {
    parseURL = url.parse(req.url)
    Category.getBookById(parseURL.id,function (error, data) {
        res.json(data).end()
    })
})



app.listen(port, ()=> console.log(`Server Started at ${port}`));