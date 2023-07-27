const logger = require('../middleware/logger');
const userMapper = require('../middleware/userMapper');
const usersRepository = require('../repositories/usersRepository');
const booleanFunctions = require('../utils/booleanFunctions');
const validate = require('../utils/dataValidator');
const bcrypt = require('bcrypt');

async function userRegister(userData){ 
    let newUser = userMapper.mapRequestToUserRegisterModel(userData);

    if(validate.validateUser(newUser)){
        if(await isMailUsed(newUser.mail) && await isLoginUsed(newUser.login)){
            
            bcrypt.hash(newUser.password, 10, (err, hash) => {
                newUser.password = hash;
                
                return usersRepository.addNewUser(newUser);
            });
            
        }else if (! await isLoginUsed(newUser.login)){
            logger.logInformation('Login zajęty')
            return 'login';
        }else{
            logger.logInformation('E-mail zajęty')
            return 'mail';
        }
    }

    logger.logInformation('Validate error');
    return 'failed';
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