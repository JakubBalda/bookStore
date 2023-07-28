const logger = require('../middleware/logger');
const mapper = require('../middleware/userMapper');
const repository = require('../repositories/usersRepository');

async function getUserDetails(userId){
    let userData = repository.getAllDetails(userId);
    userData = mapper

    return 
}

module.exports = {getUserDetails};