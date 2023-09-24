const logger = require('../middleware/logger');
const usersRepository = require('../repositories/usersRepository');

async function getPreferences(userId){
    logger.logInformation('getFavouriteAuthorsUseCase.getFavouriteAuthors requested');

    let preferences = await usersRepository.getUserPreferencesByUserId(userId);
    
    if(preferences[0] !== undefined && preferences[1] !== undefined){
        preferences[0] = JSON.parse(preferences[0].Authors);
        preferences[1] = JSON.parse(preferences[1].Genres);
    }else if (preferences[0] !== undefined){
        preferences[0] = JSON.parse(preferences[0].Authors);
        preferences[1] = '';
    }else if (preferences[1] !== undefined){
        preferences[0] = '';
        preferences[1] = JSON.parse(preferences[1].Genres);
    }else{
        preferences[0] = '';
        preferences[1] = '';
    }

    return preferences;
}

module.exports = {getPreferences};