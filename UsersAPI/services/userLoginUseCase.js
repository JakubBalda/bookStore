const logger = require('../middleware/logger');
const userRepository = require('../repositories/usersRepository');
const mapper = require('../middleware/userMapper');
const bcrypt = require('bcrypt');

async function userLogginIn(userLoggingInData){

    let userLogginInDataFromDB = await userRepository.getUserLoginDataByLogin(userLoggingInData.login);
    
    if(userLogginInDataFromDB[0] !== undefined){
        userLogginInDataFromDB = mapper.mapDbUserDataToLoginModel(userLogginInDataFromDB[0]);

        if(await bcrypt.compare(userLoggingInData.password, userLogginInDataFromDB.password)){
            return mapper.mapPassedLoginUserData(userLogginInDataFromDB);
        }
        
        return 'Failed'
    }
        return 'Failed';
}

module.exports = {userLogginIn};