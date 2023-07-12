const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorsSchema = new Schema({
    authors: [
        {
            type: Schema.Types.ObjectId,
            ref: 'AuthorDTO'
        }
    ]
})

module.exports = mongoose.model('AuthorsDTO', AuthorsSchema);