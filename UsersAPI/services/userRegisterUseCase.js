const logger = require('../middleware/logger');
const userMapper = require('../middleware/userMapper');
const usersRepository = require('../repositories/usersRepository');

async function userRegister(userData){
    // TODO: Password encryption
    
    let newUser = userMapper.mapRequestToUserRegisterModel(userData);
    logger.logData(newUser);

    return true;
}

module.exports = {userRegister};