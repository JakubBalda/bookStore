const logger = require('./logger');
const userRegisterModel = require('../models/web/userRegisterModel');

function mapRequestToUserRegisterModel(req){
    let newUser = new userRegisterModel({
        login: String(req.login),
        password: String(req.password),
        role: String(req.role)
    });

    return newUser;
}

module.exports = {mapRequestToUserRegisterModel};