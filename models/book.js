const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    id: Number,
    title: {type: String, required: true},
    author: {type: String, required: true},
    isbn: {type: String, required: true},
    description: {type: String, maxLength: [200, 'Description must have less than 200 signsx']},
    price: {type: Number, required: true, min: [0, 'Price cannot be negative value']},
    amount: {type: Number, min: [0, 'Amount cannot be negative value']},
    //Image: *jak dodać blob file?*
})

module.exports = mongoose.model('Book', BookSchema);

/*
- Id: Int,
- Title: string,
- Author: string,
- Description: string
- ISBN: string
- Price: Double
- Amount: Int
- Image: blob file*/