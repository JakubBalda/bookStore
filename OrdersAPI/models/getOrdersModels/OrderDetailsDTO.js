const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderDetailsSchema = new Schema({
    orderId: {type: Number},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    city: {type: String, required: true},
    street: {type: String, required: true},
    houseNumber: {type: String, required: true},
    flatNumber: {type: String},
    postal: {type: String, required: true},
    mail: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    deliveryOption: {type: String, required: true},
    paymentOption: {type: String, required: true},
    fullOrderPrice: {type: Number, required: true},
    cart: {type: JSON, required: true},
    orderDate: {type: String, require: true},
    status: {type: String, require: true},
})

module.exports = mongoose.model('OrderDetailsDTO', OrderDetailsSchema);