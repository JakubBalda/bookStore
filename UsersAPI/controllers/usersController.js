const logger = require('../middleware/logger');

async function login(req, res, next){
    logRequest('login', req);

    res.send('Login');
}

module.exports = {login}

function logRequest(endpointName, req) {
    logger.logInformation(`${endpointName} endpoint requested`);
    logger.logRequest(req);
}