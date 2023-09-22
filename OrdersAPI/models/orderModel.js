const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    orderId: {type: Number},
    userId: {type: Number, required: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    city: {type: String, required: true},
    street: {type: String, required: true},
    houseNumber: {type: String, required: true},
    flatNumber: {type: String},
    postal: {type: String, required: true},
    mail: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    deliverOption: {type: String, required: true},
    paymentOption: {type: String, required: true},
    fullOrderPrice: {type: Number, required: true},
    cart: {type: JSON, required: true}
})

module.exports = mongoose.model('orderModel', OrderSchema);