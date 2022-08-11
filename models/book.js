const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    authorName: String,
    authorSurname: String,
    iban: String,
    price: String,
})

module.exports = mongoose.model('Book', BookSchema);




