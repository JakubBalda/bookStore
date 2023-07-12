const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    id: Number,
    name: String,
    surname: String
})

module.exports = mongoose.model('AuthorDTO', AuthorSchema);
