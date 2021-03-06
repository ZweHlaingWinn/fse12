const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    create_at: {
        type: Date,
        default: Date.now
    }
})

const Category = module.exports = mongoose.model('Category', categorySchema)

// module.exports.Category = mongoose.model('Category', categorySchema)

module.exports.getCategories = (callback,limit) => {
    Category.find(callback).limit(limit)
}

module.exports.getCategoryById= (id, callback)=> {
    Category.findOne(id, callback)
}