const logger = require('../middleware/logger');
const database = require('../database');

async function getUserOrders(userId){
    let query = `SELECT OrderID, DeliveryOption, PaymentOption, FullOrderPrice, OrderDate FROM Orders WHERE UserID = ${userId}`;

    try{
        return await database.sqlQuery(query);
    }catch(err){
        console.log(err);

        return undefined;
    }
}

async function getOrderDetails(orderId){
    let query = `SELECT OrderID, Name, Surname, City, Street, HouseNumber, FlatNumber, Postal, Mail, PhoneNumber, DeliveryOption,
                    PaymentOption, FullOrderPrice, Cart, Status, OrderDate FROM Orders WHERE OrderID = ${orderId}`;

    try{
        return await database.sqlQuery(query);
    }catch(err){
        console.log(err);

        return undefined;
    }
}

async function storeOrder(orderData, orderCart){
    orderCart = JSON.stringify(orderCart);

    let query = `INSERT INTO Orders (UserID, Name, Surname, City, Street, HouseNumber, FlatNumber, Postal, 
                    Mail, PhoneNumber, DeliveryOption, PaymentOption, FullOrderPrice, Cart, Status, OrderDate)
                    VALUES  ('${orderData.userId}', '${orderData.name}', '${orderData.surname}', '${orderData.city}', 
                        '${orderData.street}', '${orderData.houseNumber}', '${orderData.flatNumber}', '${orderData.postal}',
                        '${orderData.mail}', '${orderData.phoneNumber}', '${orderData.deliveryOption}', '${orderData.paymentOption}',
                        ${orderData.fullOrderPrice}, '${orderCart}', 'Nie opłacone', '${orderData.date}')`;
    try{
        await database.sqlQuery(query);

        return true;
    }catch(err){
        logger.logInformation(err);
        return false;
    }
}   

async function storeNewReservation(reservationData){
    let query = `INSERT INTO Reservations (UserID, Cart, ReservationDate, ExpirationDate, Status) VALUES
                    (${reservationData.userId}, '${reservationData.cart}', '${reservationData.reservationDate}',
                    '${reservationData.expirationDate}','Oczekująca')`;

    try{
        await database.sqlQuery(query);

        return true;
    }catch(err){
        logger.logInformation(err);
        return false;
    }
}

async function getUserReservations(userId){
    let query = `SELECT ReservationID, Cart, ReservationDate, ExpirationDate, Status FROM Reservations WHERE UserID = ${userId}`;

    try{
        return await database.sqlQuery(query);;
    }catch(err){
        logger.logInformation(err);
        return undefined;
    }
}

async function cancelReservation(reservationData){
    let query = `UPDATE Reservations SET Status = '${reservationData.status}' WHERE ReservationID = ${reservationData.reservationId}`;

    try{
        await database.sqlQuery(query);

        return true;
    }catch(err){
        logger.logInformation(err);
        return false;
    }
}

async function getActiveReservations(){
    let query = 'SELECT ReservationID, ExpirationDate FROM Reservations WHERE Status = "Oczekująca"';

    try{
        return await database.sqlQuery(query);;
    }catch(err){
        logger.logInformation(err);
        return undefined;
    }
}

async function changeReservationsStatusToCanceled(reservations){
    
    try{
        const updateQueries = reservations.map(reservation => `UPDATE Reservations SET Status = "Anulowana" WHERE ReservationID = ${reservation}`);

        await database.sqlQueries(updateQueries);

        return true;
    }catch(err){
        logger.logInformation(err);
        return undefined;
    }
}

async function changeReservationsStatusToEnded(reservation){
   let query =  `UPDATE Reservations SET Status = "Zakończona" WHERE ReservationID = ${reservation}`;

   try{
        await database.sqlQuery(query);

        return true;
    }catch(err){
        logger.logInformation(err);
        return false;
    }
}

async function getBooksToReturnToStock(reservationsId){
    try{
        const selectQueries = reservationsId.map(reservationId => `SELECT Cart FROM Reservations WHERE ReservationID = ${reservationId}`);

        return await database.sqlQueries(selectQueries);;
    }catch(err){
        logger.logInformation(err);
        return undefined;
    }
}

module.exports = { storeOrder, getUserOrders, getOrderDetails, storeNewReservation, getUserReservations, 
                        cancelReservation, getActiveReservations, changeReservationsStatus: changeReservationsStatusToCanceled, 
                        changeReservationsStatusToEnded, getBooksToReturnToStock }