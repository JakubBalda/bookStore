const logger = require('../middleware/logger');
const usersRepository = require('../repositories/usersRepository');

async function setFavouriteGenres(){
    logger.logInformation('setFavouriteGenresUseCase.setFavouriteGenres requested');
    let information = 'Error';

    if(await favouriteGenresExist(userId)){
        let ID = await usersRepository.findUserById(userId, 'favourite_genres');

        information = await usersRepository.updateFavouriteGenres(authors, ID[0].ID);
    }else{
        information = await usersRepository.addFavouriteGenres(authors, userId);
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