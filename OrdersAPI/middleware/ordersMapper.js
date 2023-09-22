const orderModel = require('../models/orderModel');

function mapNewOrder(orderData, currentDate){
    let newOrder = new orderModel({
        userId: orderData[0],
        name: orderData[1].name,
        surname: orderData[1].surname,
        city: orderData[1].city,
        street: orderData[1].street,
        houseNumber: orderData[1].houseNumber,
        flatNumber: orderData[1].flatNumber,
        postal: orderData[1].postal,
        mail: orderData[1].mail,
        phoneNumber: orderData[1].phoneNumber,
        deliveryOption: orderData[1].deliveryOption,
        paymentOption: orderData[1].paymentOption,
        fullOrderPrice: orderData[1].fullOrderPrice,
        date: currentDate
    })

    return newOrder;
}

module.exports = {mapNewOrder}