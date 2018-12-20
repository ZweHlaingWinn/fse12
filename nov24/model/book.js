const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author:{
        type: String
    },
    category:{
        type: String
    },
    created_at:{
        type: Date,
        default: Date.now()
    }

})


const Book = module.exports = mongoose.model('Book', bookSchema)

// module.exports.Category = mongoose.model('Category', categorySchema)

module.exports.getBooks = (callback,limit) => {
    Book.find(callback).limit(limit)
}

module.exports.getBookById = (id,callback) =>{
    Book.findOne(id,callback)
}