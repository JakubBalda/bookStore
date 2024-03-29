const logger = require('../middleware/logger');
const axios = require('axios');
const ordersRepository = require('../repositories/ordersRepository');

async function storeNewOrder(orderData, orderCart, isFromReservation, reservationId){
    let orderInformation = true;
    
    if(await ordersRepository.storeOrder(orderData, orderCart)){
        if(!isFromReservation){
            if(await changeBooksAmount(orderCart)){
                orderInformation = true;
            }else{
                orderInformation = false;
            }
        }else{
            await ordersRepository.changeReservationsStatusToEnded(reservationId);
            orderInformation = true;
        }
    }else{
        orderInformation = false;
    }

    return orderInformation;
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

module.exports = {storeNewOrder}