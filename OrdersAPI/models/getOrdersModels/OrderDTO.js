const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    orderId: {type: Number},
    deliveryOption: {type: String, required: true},
    paymentOption: {type: String, required: true},
    fullOrderPrice: {type: Number, required: true},
    date: {type: String, require: true}
})

module.exports = mongoose.model('OrderDTO', OrderSchema);