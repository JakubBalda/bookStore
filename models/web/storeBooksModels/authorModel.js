const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: String,
    surname: String
})

module.exports = mongoose.model('storeAuthorModel', AuthorSchema);
