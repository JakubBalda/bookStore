const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
    userId: {type: Number, required: true},
    cart: {type: JSON, required: true},
    reservationDate: {type: String, require: true},
    expirationDate: {type: String, require: true},
})

module.exports = mongoose.model('reservationModel', ReservationSchema);