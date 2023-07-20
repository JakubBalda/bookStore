const logger = require('../middleware/logger');
const userLoginUseCase = require('../services/userLoginUseCase');
const userRegisterUseCase = require('../services/userRegisterUseCase');

async function login(req, res, next){
    logRequest('login', req);

    res.send('Login');
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