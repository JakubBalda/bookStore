const repository = require('../../repositories/booksRepository');
const logger = require('../../middleware/logger');

async function getGenres(){
    logger.logInformation('getBooksGenres.getGenres requested');

    let genres = await repository.getGenres();

    return genres;
} 

module.exports = {getGenres};