const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserLoginSchema = new Schema({
    login: String,
    password: String,
    role: String
})

module.exports = mongoose.model('userLoginSchema', UserLoginSchema);