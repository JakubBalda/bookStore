const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    id: Number,
    author: {type: String, required: true},
    title: {type: String, required: true},
    price: {type: Number, required: true, min: [0, 'Price cannot be negative value']},
    amount: {type: Number, min: [0, 'Amount cannot be negative value']},
})

module.exports = mongoose.model('BookDTO', BookSchema);
