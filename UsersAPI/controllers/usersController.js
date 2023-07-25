const logger = require('../middleware/logger');
const mapper = require('../middleware/userMapper');
const userLoginUseCase = require('../services/userLoginUseCase');
const userRegisterUseCase = require('../services/userRegisterUseCase');

async function login(req, res, next){
    logRequest('login', req);

    //let userLoginData = mapper.mapRequestToUserLoginModel(req.query);
    //let isLoggingInPassed = await userLoginUseCase.userLogginIn(userLoginData);

    res.send('isLoggingInPassed');
}

async function register(req, res, next){
    logRequest('register', req);

    let register = userRegisterUseCase.userRegister(req.query);

    res.send(register)
}

module.exports = {login, register}

function logRequest(endpointName, req) {
    logger.logInformation(`${endpointName} endpoint requested`);
    logger.logRequest(req);
}