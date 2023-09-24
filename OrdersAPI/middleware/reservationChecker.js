const { checkReservationExpirationDate } = require('../controllers/ordersController');

function checkReservationExpiration(){
    checkReservationExpirationDate();
    setInterval(checkReservationExpirationDate, 60000);

}

module.exports = {checkReservationExpiration}