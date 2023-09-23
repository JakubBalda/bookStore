const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: 'orderModel'
        }
    ]
})

module.exports = mongoose.model('OrdersDTO', OrdersSchema);