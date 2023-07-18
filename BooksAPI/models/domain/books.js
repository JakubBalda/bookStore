const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    books: [
        {
            type: Schema.Types.ObjectId,
            ref: 'BookModel'
        }
    ]
})

module.exports = mongoose.model('BooksModel', BooksSchema);




