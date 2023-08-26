const authorsMapper = require('../middleware/authorsMapper');
const logger = require('../middleware/logger');


async function getAllAuthors(req, res, next){
    logger.logRequest('getAllAuthors', req);

    res.send('got it');
}

module.exports = {getAllAuthors};