const authorsMapper = require('../middleware/authorsMapper');
const logger = require('../middleware/logger');


async function getAllAuthors(req, res, next){
    logger.logRequest('getAllAuthors', req);
}

module.exports = {getAllAuthors};