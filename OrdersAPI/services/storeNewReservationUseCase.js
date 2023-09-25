const logger = require('../middleware/logger');
const axios = require('axios');
const ordersRepository = require('../repositories/ordersRepository');
const ordersMapper = require('../middleware/ordersMapper');

async function storeNewReservation(reservation){
    const dates = getDates();
    const reservationCart = reservation.cart;
    const reservationData = ordersMapper.mapNewReservation(reservation, dates);

    if(await ordersRepository.storeNewReservation(reservationData)){
        if(await changeBooksAmount(reservationCart)){
            return true
        }
        return false;
    }
    return false;
}

async function changeBooksAmount(books){
    let updateInformation = '';

    await axios.put('http://localhost:5000/api/books/updateBookAmount', {books: books, method: 'decrease'})
        .then((response) => {

            updateInformation = response.data;
        })
        .catch((error) => {
            logger.logInformation(error);
        })

    return updateInformation;
}

function getDates(){
    let date = new Date();

    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const currentDate = `${year}-${month}-${day} ${hours}:${minutes}`;
    date.setDate(date.getDate() + 3);

    year = date.getFullYear();
    month = (date.getMonth() + 1).toString().padStart(2, '0');
    day = date.getDate().toString().padStart(2, '0');

    const expirationDate = `${year}-${month}-${day} ${hours}:${minutes}`;

    return {currentDate: currentDate, expirationDate: expirationDate};
}

module.exports = {storeNewReservation}