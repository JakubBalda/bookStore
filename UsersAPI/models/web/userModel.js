const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserDetailsSchema = new Schema({
    login: {type: String, required: true},
    role: {type: String, required: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    street: {type: String, required: true},
    houseNumber: {type: String, required: true},
    flatNumber: String,
    postalCode: {type: String, required: true},
    city: {type: String, required: true},
    mail: {type: String, required: true},
    phoneNumber: {type: String, required: true}
})

module.exports = mongoose.model('userDetailsSchema', UserDetailsSchema);