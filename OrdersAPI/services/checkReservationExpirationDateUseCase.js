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
        await ordersRepository.changeReservationsStatus(reservationsToCancel);
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