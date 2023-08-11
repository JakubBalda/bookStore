const logger = require('../middleware/logger');
const usersRepository = require('../repositories/usersRepository');

async function updateData(userData, userId){
    return usersRepository.updateUserDetails(userData, userId);
}

module.exports = {updateData};