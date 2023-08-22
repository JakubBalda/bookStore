const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    id: Number,
    author: Number,
    title: {type: String, required: true},
    price: {type: Number, required: true, min: [0, 'Price cannot be negative value']},
    amount: {type: Number, min: [0, 'Amount cannot be negative value']},
    imageUrl: String,
    imageBlob: Buffer,
    isbn: {type: String, required: true, maxLenght: 17},
    description: {type: String, maxLength: [200, 'Description must have less than 200 signsx']},
    publisher: {type: String, required: true},
    publishYear: Number,
    pageAmount: {type: Number, min: [1, 'Number of pages cannot be below 1']},
    genre: {type: String, reqired: true},
    oldIsbn: {type: String, required: true}
})

module.exports = mongoose.model('updateBookModel', BookSchema);
