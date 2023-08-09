const logger = require('../middleware/logger');
const mapper = require('../middleware/userMapper');
const userLoginUseCase = require('../services/userLoginUseCase');
const userRegisterUseCase = require('../services/userRegisterUseCase');
const getAllUserDetailsUseCase = require('../services/getAllUserDetails');

async function login(req, res, next){
    logRequest('login', req);

    let userLoginData = mapper.mapRequestToUserLoginModel(req.body);
    let isLoggingInPassed
    if(userLoginData.login !== '' && userLoginData.password !== '')
        isLoggingInPassed = await userLoginUseCase.userLogginIn(userLoginData);

    res.send(isLoggingInPassed);
}

async function register(req, res, next){
    logRequest('register', req);

    let register = userRegisterUseCase.userRegister(req.body);

    res.send(register)
}

async function getAllUserData(req, res, next){
    logRequest('getAllUserData', req);
    
    let userData = await getAllUserDetailsUseCase.getUserDetails(req.params.id);

    res.send(userData);
}

async function updateUserData(req, res, next){
    logRequest('updateUserData', req);

    res.send('completed');
}

async function updateUserPassword(req, res, next){
    logRequest('updateUserPassword', req);

    res.send('updated')
}

module.exports = {login, register, getAllUserData, updateUserData, updateUserPassword}

function logRequest(endpointName, req) {
    logger.logInformation(`${endpointName} endpoint requested`);
    logger.logRequest(req);
}