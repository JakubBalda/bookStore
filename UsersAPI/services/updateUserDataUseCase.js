const logger = require('../middleware/logger');
const usersRepository = require('../repositories/usersRepository');
const booleanFunctions = require('../utils/booleanFunctions');

async function updateData(userData, userId){
    if(! await isMailUsed(userData.mail, userId) && ! await isLoginUsed(userData.login, userId)){
        return await usersRepository.updateUserDetails(userData, userId);
    }else if (await isMailUsed(userData.mail, userId)){
        return 'Mail';
    }else{
        return 'Login'
    }
}

async function isMailUsed(userMail, userId){
    let findedUserId = await usersRepository.findUserByMail(userMail);
    logger.logData(findedUserId[0]);
    
    if(!booleanFunctions.isNullOrUndefined(findedUserId[0]))
        return booleanFunctions.notEquals(userId, findedUserId[0].ID);
    else
        return false;
}

async function isLoginUsed(userLogin, userId){
    let findedUserId = await usersRepository.findUserByLogin(userLogin);
    logger.logData(findedUserId[0]);
    
    if(!booleanFunctions.isNullOrUndefined(findedUserId[0]))
        return booleanFunctions.notEquals(userId, findedUserId[0].ID);
    else
        return false;
}

module.exports = {updateData};