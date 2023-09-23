const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: 'OrderDTO'
        }
    ]
})

module.exports = mongoose.model('OrdersDTO', OrdersSchema);