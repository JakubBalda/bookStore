const logger = require('../middleware/logger');
const usersRepository = require('../repositories/usersRepository');

async function getFavouriteAuthors(userId){
    logger.logInformation('getFavouriteAuthorsUseCase.getFavouriteAuthors requested');

    let authors = await usersRepository.getFavouriteAuthorsByUserId(userId);
    
    if(authors[0] !== undefined)
        authors = JSON.parse(authors[0].Authors);

    return authors;
}

module.exports = {getFavouriteAuthors};