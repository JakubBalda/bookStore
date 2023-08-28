const logger = require('../middleware/logger');
const mapper = require('../middleware/userMapper');
const userLoginUseCase = require('../services/userLoginUseCase');
const userRegisterUseCase = require('../services/userRegisterUseCase');
const getAllUserDetailsUseCase = require('../services/getAllUserDetails');
const updateUserDataUseCase = require('../services/updateUserDataUseCase');
const updateUserPasswordUseCase = require('../services/updateUserPasswordUseCase');
const setFavouriteAuthorsUseCase = require('../services/setFavouriteAuthorsUseCase');
const getFavouriteAuthorsUseCase = require('../services/getFavouriteAuthorsUseCase');

async function login(req, res, next){
    logRequest('login', req);

    let userLoginData = mapper.mapRequestToUserLoginModel(req.body);
    let isLoggingInPassed
    if(userLoginData.login !== '' && userLoginData.password !== '')
        isLoggingInPassed = await userLoginUseCase.userLogginIn(userLoginData);

    res.send(isLoggingInPassed);
}

async function register(req, res, next){
    logRequest('register', req);

    let register = userRegisterUseCase.userRegister(req.body);

    res.send(register)
}

async function getAllUserData(req, res, next){
    logRequest('getAllUserData', req);
    
    let userData = await getAllUserDetailsUseCase.getUserDetails(req.params.id);

    res.send(userData);
}

async function updateUserData(req, res, next){
    logRequest('updateUserData', req);

    let userData = mapper.mapRequestToUserModel(req.body);
    let isUpdated = await updateUserDataUseCase.updateData(userData, req.params.id);

    res.send(isUpdated);
}

async function updateUserPassword(req, res, next){
    logRequest('updateUserPassword', req);

    if(  updateUserPasswordUseCase.encryptPassword(req.body, req.params.id))
        res.send('Zaktualizowano');
    else
        res.send('Error');

}

async function storeFavouriteAuthors(req, res, next){
    logRequest('storeFavouriteAuthors', req);
    
    let authors = JSON.stringify(req.body[1]);
    let information = await setFavouriteAuthorsUseCase.setFavouriteAuthors(authors, req.body[0]);

    res.send(information);
}

async function getPreferences(req, res, next){
    logRequest('getFavouriteAuthors', req);

    let favouriteAuthors = await getFavouriteAuthorsUseCase.getFavouriteAuthors(req.params.id);

    res.send(favouriteAuthors);
}

async function storeFavouriteGenres(req, res, next){
    logRequest('storeFavouriteGenres', req);
    
    let genres = JSON.stringify(req.body[1]);
    //let information = await setFavouriteAuthorsUseCase.setFavouriteAuthors(genres, req.body[0]);

    res.send(information);
}

module.exports = {login, register, getAllUserData, updateUserData, 
    updateUserPassword, storeFavouriteAuthors, getPreferences, storeFavouriteGenres}

function logRequest(endpointName, req) {
    logger.logInformation(`${endpointName} endpoint requested`);
    logger.logRequest(req);
}