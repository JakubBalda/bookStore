const logger = require('./logger');
const userRegisterModel = require('../models/web/userRegisterModel');
const userLoginModel = require('../models/web/userLoginModel');
const userModel = require('../models/web/userModel');

function mapRequestToUserRegisterModel(req){
    let newUser = new userRegisterModel({
        login: String(req.login),
        password: String(req.password),
        role: String('User'),
        name: String(req.name),
        surname: String(req.surname),
        street: String(req.street),
        houseNumber: String(req.houseNumber),
        flatNumber: String(req.flatNumber),
        postalCode: String(req.postal),
        city: String(req.city),
        mail: String(req.mail),
        phoneNumber: String('+48' + req.phoneNumber)
    });

    return newUser;
}

function mapRequestToUserLoginModel(req){
    let loginData = new userLoginModel({
        login: req.login,
        password: req.password
    });

    return loginData;
}

function mapDbUserDataToLoginModel(userData){
    let loginData = new userLoginModel({
        login: userData.Login,
        password: userData.Password,
        id: userData.ID,
        role: userData.Role
    });

    return loginData;
}

function mapPassedLoginUserData(userData){
    let loginData = new userLoginModel({
        login: userData.login,
        id: userData.id,
        role: userData.role
    });

    return loginData;
}

function mapAllUserDetailsToWebModel(userData){
    let userDetails = new userModel({
        login: userData.Login,
        role: userData.Role,
        name: userData.Name,
        surname: userData.Surname,
        street: userData.Street,
        houseNumber: userData.HouseNumber,
        flatNumber: userData.FlatNumber,
        postalCode: userData.Postal,
        city: userData.City,
        mail: userData.Mail,
        phoneNumber: userData.PhoneNumber
    });

    return userDetails;
}

function mapRequestToUserModel(req){
    let userData = new userModel({
        login: req.login,
        name: req.name,
        surname: req.surname,
        street: req.street,
        houseNumber: req.houseNumber,
        flatNumber: req.flatNumber,
        postalCode: req.postal,
        city: req.city,
        mail: req.mail,
        phoneNumber: String('+48' + req.phoneNumber)
    });

    return userData;
}
module.exports = {mapRequestToUserRegisterModel, mapRequestToUserLoginModel, 
                    mapDbUserDataToLoginModel, mapPassedLoginUserData, mapAllUserDetailsToWebModel, 
                    mapRequestToUserModel};