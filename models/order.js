const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const OrderSchema = new Schema({
    bookId: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Books'
        }
    ],
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    description: String
})

module.exports = mongoose.model('Order', OrderSchema);




