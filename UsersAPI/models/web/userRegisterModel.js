const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserRegisterSchema = new Schema({
    login: String,
    password: String,
    role: String
})

module.exports = mongoose.model('userRegisterSchema', UserRegisterSchema);