const repository = require('../../repositories/booksRepository');
const logger = require('../../middleware/logger');

async function getGenres(location){
    logger.logInformation('getBooksGenres.getGenres requested');

    let genres = await repository.getGenres(location);

    return genres;
} 

module.exports = {getGenres};