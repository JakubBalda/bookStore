const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    id: Number,
    author: {type: String, required: true},
    title: {type: String, required: true},
    isbn: {type: String, required: true},
    price: {type: Number, required: true, min: [0, 'Price cannot be negative value']},
    imageUrl: String,
    imageBlob: Buffer,
    amount: {type: Number, min: [0, 'Amount cannot be negative value']},
    description: {type: String, maxLength: [200, 'Description must have less than 200 signsx']},
    publisher: {type: String, required: true},
    publishYear: Number,
    pageAmount: {type: Number, min: [1, 'Number of pages cannot be below 1']},
    genre: {type: String, reqired: true},
    podcastLink: {type: String}
})

module.exports = mongoose.model('BookDTO', BookSchema);
