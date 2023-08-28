const logger = require('../middleware/logger');
const usersRepository = require('../repositories/usersRepository');

async function setFavouriteGenres(){
    logger.logInformation('setFavouriteGenresUseCase.setFavouriteGenres requested');
    
}

module.exports = { setFavouriteGenres };