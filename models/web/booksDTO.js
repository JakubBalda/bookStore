const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    books: [
        {
            type: Schema.Types.ObjectId,
            ref: 'BookDTO'
        }
    ]
})



module.exports = mongoose.model('BooksDTO', BooksSchema);




