const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    id: Number,
    author: {type: String, required: true},
    title: {type: String, required: true},
    price: Number,
    amount: Number,
})

module.exports = mongoose.model('BookDTO', BookSchema);
