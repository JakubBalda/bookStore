const ordersRepository = require('../repositories/ordersRepository');
const logger = require('../middleware/logger');
const axios = require('axios');

async function cancelReservation(reservationData){
    const cancelReservationInformation = await ordersRepository.cancelReservation(reservationData);

    if(cancelReservationInformation === true){
        await changeBooksAmount(reservationData.cart);
        
        return cancelReservationInformation;
    }

    return cancelReservationInformation;
}


module.exports = { cancelReservation }

async function changeBooksAmount(books){
    let updateInformation = '';

    await axios.put('http://localhost:5000/api/books/updateBookAmount', {books: books, method: 'increase'})
        .then((response) => {

            updateInformation = response.data;
        })
        .catch((error) => {
            logger.logInformation(error);
        })

    return updateInformation;
}