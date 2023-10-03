const { default: axios } = require('axios');
const ordersRepository = require('../repositories/ordersRepository');

async function checkExpiration(){
    console.log('checkExpiration');
    let reservationsToCancel = [];

    const activeReservations = await ordersRepository.getActiveReservations();
    const currentDate = getCurrentDate();

    if(activeReservations !== undefined && activeReservations.length > 0){
        activeReservations.forEach(reservation => {

            const year = reservation.ExpirationDate.getFullYear();
            const month = (reservation.ExpirationDate.getMonth() + 1).toString().padStart(2, '0');
            const day = reservation.ExpirationDate.getDate().toString().padStart(2, '0');
            const hours = reservation.ExpirationDate.getHours().toString().padStart(2, '0');
            const minutes = reservation.ExpirationDate.getMinutes().toString().padStart(2, '0');

            const expirationDate = `${year}-${month}-${day} ${hours}:${minutes}`;
            
            if(expirationDate <= currentDate){
                reservationsToCancel.push(reservation.ReservationID)
            }
        });
    }

    if(reservationsToCancel.length > 0){
        try{
            const booksCarts = await ordersRepository.getBooksToReturnToStock(reservationsToCancel);
            const booksToReturnToStock = [];

            booksCarts.forEach(cart => {
                cart = JSON.parse(cart[0].Cart)
                booksToReturnToStock.push(cart);
            });

            console.log(booksToReturnToStock);
            
            axios.put('http://localhost:5000/api/books/updateBookAmount', {books: booksToReturnToStock, method: 'autoIncrease'})
                .then((response) => {
                    updateInformation = response.data;
                })
                .catch((error) => {
                    logger.logInformation(error);
                })

            await ordersRepository.changeReservationsStatus(reservationsToCancel);
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = {checkExpiration}

function getCurrentDate(){
    let date = new Date();

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const currentDate = `${year}-${month}-${day} ${hours}:${minutes}`;

    return currentDate;
}