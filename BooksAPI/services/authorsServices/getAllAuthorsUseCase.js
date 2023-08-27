const logger = require('../../middleware/logger');
const authorsRepository = require('../../repositories/authorsRepository');
const authorsMapper = require('../../middleware/authorsMapper');

async function getAuthors(){
    logger.logInformation('getAllAuthorsUseCase.getAuthors requested');

    let authors = await authorsRepository.getAllAuthors();
    authors = authorsMapper.mapAuthorsToWebModel(authors);

    return authors;
}

module.exports = {getAuthors};