const logger = require('../middleware/logger');
const userMapper = require('../middleware/userMapper');
const usersRepository = require('../repositories/usersRepository');
const booleanFunctions = require('../utils/booleanFunctions');
const validate = require('../utils/dataValidator');

async function updateData(userData, userId){
    return usersRepository.updateUserDetails(userData, userId);
}

module.exports = {updateData};