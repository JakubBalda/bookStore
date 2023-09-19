const logger = require('../middleware/logger');
const usersRepository = require('../repositories/usersRepository');

async function getUserDataToOrder(userId){
    logger.logInformation('getUserDataUseCase.getUserDataToOrder requested');

    return await usersRepository.getDataToOrder(userId);
}

module.exports = {getUserDataToOrder}