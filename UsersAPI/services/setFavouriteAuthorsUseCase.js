const logger = require('../middleware/logger');
const usersRepository = require('../repositories/usersRepository');

async function setFavouriteAuthors(authors, userId){
    logger.logInformation('setFavouriteAuthorsUseCase.setFavouriteAuthors requested');
    let information = 'Error';

    if(await favouriteAuthorsExist(userId)){
        let ID = await usersRepository.findUserById(userId, 'favourite_authors');

        information = await usersRepository.updateFavouriteAuthors(authors, ID[0].ID);
    }else{
        information = await usersRepository.addFavouriteAuthors(authors, userId);
    }

    return information;
}

async function favouriteAuthorsExist(userId){
    let ID = await usersRepository.findUserById(userId, 'favourite_authors');

    if(ID[0] !== undefined){
        return true;
    }else{
        return false;
    }
}

module.exports = { setFavouriteAuthors };