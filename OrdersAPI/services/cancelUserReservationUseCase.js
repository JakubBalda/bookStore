const ordersRepository = require('../repositories/ordersRepository');
const logger = require('../middleware/logger');

async function cancelReservation(reservationData){
    const cancelReservationInformation = await ordersRepository.cancelReservation(reservationData);

    return cancelReservationInformation;
}

module.exports = { cancelReservation }