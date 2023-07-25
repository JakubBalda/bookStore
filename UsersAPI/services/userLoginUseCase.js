const logger = require('../middleware/logger');
const userRepository = require('../repositories/usersRepository');
const mapper = require('../middleware/userMapper');

async function userLogginIn(userLoggingInData){

    let userLogginInDataFromDB = await userRepository.getUserLoginDataByLogin(userLoggingInData.login);
    
    if(userLogginInDataFromDB[0] !== undefined){
        userLogginInDataFromDB = mapper.mapDbUserDataToLoginModel(userLogginInDataFromDB[0]);

        //TODO: Enkrypcja haseł
        if(userLogginInDataFromDB.password === userLoggingInData.password){
            return mapper.mapPassedLoginUserData(userLogginInDataFromDB);
        }
    }
        return 'Failed';
}

module.exports = {userLogginIn};