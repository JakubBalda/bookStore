const logger = require('../middleware/logger');
const usersRepository = require('../repositories/usersRepository');

async function setFavouriteGenres(genres, userId){
    logger.logInformation('setFavouriteGenresUseCase.setFavouriteGenres requested');
    let information = 'Error';

    if(await favouriteGenresExist(userId)){
        let ID = await usersRepository.findUserById(userId, 'favourite_genres');

        information = await usersRepository.updateFavouriteGenres(genres, ID[0].ID);
    }else{
        information = await usersRepository.addFavouriteGenres(genres, userId);
    }

    return information;
}

async function favouriteGenresExist(userId){
    let ID = await usersRepository.findUserById(userId, 'favourite_genres');

    if(ID[0] !== undefined){
        return true;
    }else{
        return false;
    }
}

module.exports = { setFavouriteGenres };