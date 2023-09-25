const ordersRepository = require('../repositories/ordersRepository');
const logger = require('../middleware/logger');
const ordersMapper = require('../middleware/ordersMapper');

async function getUserReservations(userId){
    logger.logInformation('getAllUserReservationsUseCase.getUserReservations requested');

    let userReservations = await ordersRepository.getUserReservations(userId);

    if(userReservations !== undefined){
        userReservations = ordersMapper.mapAllUserReservations(userReservations);

        return userReservations;
    }else{
        return userReservations;
    }
}

module.exports = { getUserReservations };
