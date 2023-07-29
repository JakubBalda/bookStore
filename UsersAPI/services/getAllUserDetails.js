const logger = require('../middleware/logger');
const mapper = require('../middleware/userMapper');
const repository = require('../repositories/usersRepository');

async function getUserDetails(userId){
    logger.logRequest('getAllUserDetailsUseCase.getUserDetails requested')
    let userData = await repository.getAllDetails(userId);
    
    return mapper.mapAllUserDetailsToWebModel(userData[0]);
}

module.exports = {getUserDetails};