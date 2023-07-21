const logger = require('../middleware/logger');
const userMapper = require('../middleware/userMapper');
const usersRepository = require('../repositories/usersRepository');
const booleanFunctions = require('../utils/booleanFunctions');
const validate = require('../utils/dataValidator');

async function userRegister(userData){ 
    let newUser = userMapper.mapRequestToUserRegisterModel(userData);

    if(validate.validateUser(newUser)){
        if(await isMailUsed(newUser.mail) && await isLoginUsed(newUser.login)){

            logger.logData(newUser);
            return usersRepository.addNewUser(newUser);
        }else if (! await isLoginUsed(newUser.login)){
            logger.logInformation('Login zajęty')
            return false;
        }else{
            logger.logInformation('E-mail zajęty')
            return false;
        }
        
    }

    logger.logInformation('Validate error');
    return false;
}

async function isMailUsed(userMail){
    let userId = await usersRepository.findUserByMail(userMail);
    logger.logData(userId[0]);
    
    return booleanFunctions.isNullOrUndefined(userId[0]);
}

async function isLoginUsed(userLogin){
    let userId = await usersRepository.findUserByLogin(userLogin);
    logger.logData(userId[0]);
    
    return booleanFunctions.isNullOrUndefined(userId[0]);
}

module.exports = {userRegister};