const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    books: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Book'
        }
    ]
})



module.exports = mongoose.model('Books', BooksSchema);




