const logger = require('./logger');
const userRegisterModel = require('../models/web/userRegisterModel');

function mapRequestToUserRegisterModel(req){
    let newUser = new userRegisterModel({
        login: String(req.login),
        password: String(req.password),
        role: String(req.role),
        name: String(req.name),
        surname: String(req.surname),
        street: String(req.street),
        houseNumber: String(req.houseNumber),
        flatNumber: String(req.flatNumber),
        postalCode: String(req.postalCode),
        city: String(req,city),
        mail: String(req.mail),
        phoneNumber: String(req.phoneNumber)
    });

    return newUser;
}

module.exports = {mapRequestToUserRegisterModel};