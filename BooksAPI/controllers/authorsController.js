const logger = require('../middleware/logger');
const getAllAuthorsUseCase = require('../services/authorsServices/getAllAuthorsUseCase');

async function getAllAuthors(req, res, next){
    logRequest('getAllAuthors', req);

    let allAuthors = await getAllAuthorsUseCase.getAuthors();
    res.send(allAuthors);
}

module.exports = {getAllAuthors};

function logRequest(endpointName, req) {
    logger.logInformation(`${endpointName} endpoint requested`);
    logger.logRequest(req);
}