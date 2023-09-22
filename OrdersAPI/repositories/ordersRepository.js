const logger = require('../middleware/logger');
const database = require('../database');

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

module.exports = { storeOrder }