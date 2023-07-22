const logger = require('../middleware/logger');
const userRepository = require('../repositories/usersRepository');
const mapper = require('../middleware/userMapper');

async function userLogginIn(userLoggingInData){

    let userLogginInDataFromDB = await userRepository.getUserLoginDataByLogin(userLoggingInData.login);
    userLogginInDataFromDB = mapper.mapDbUserDataToLoginModel(userLogginInDataFromDB[0]);

    if(userLogginInDataFromDB.id !== undefined){
        //TODO: Enkrypcja haseł
        if(userLogginInDataFromDB.password === userLoggingInData.password){
            return mapper.mapPassedLoginUserData(userLogginInDataFromDB);
        }
    }
        return 'Logging in failed';
}

module.exports = {userLogginIn};