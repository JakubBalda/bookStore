const storeNewOrderModel = require('../models/storeNewOrderModels/orderModel');
const ordersModel = require('../models/getOrdersModels/OrdersDTO');
const getOrderModel = require('../models/getOrdersModels/OrderDTO');
const getOrderDetailsModel = require('../models/getOrdersModels/OrderDetailsDTO');
const storeNewReservationModel = require('../models/storeNewReservationModels/reservationModel');
const reservationsModel = require('../models/getReservationsModels/ReservationsDTO');
const getReservationModel = require('../models/getReservationsModels/ReservationDTO');

function mapNewOrder(orderData, currentDate){
    let newOrder = new storeNewOrderModel({
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

function mapAllUserOrders(orders){
    let userOrders = new ordersModel();

    for(let i = 0; i < orders.length; i++){
        let userOrder = mapSingleUserOrder(orders[i]);
        userOrders.orders.push(userOrder);
    }

    return userOrders;
}

function mapSingleUserOrder(order){
    order.DeliveryOption = changeDeliveryOptionName(order.DeliveryOption);
    order.PaymentOption = changePaymentOptionName(order.PaymentOption);
    
    const userOrder = new getOrderModel({
        orderId: order.OrderID,
        deliveryOption: order.DeliveryOption,
        paymentOption: order.PaymentOption,
        fullOrderPrice: order.FullOrderPrice,
        date: order.OrderDate
    });

    return userOrder;
}

function mapOrderDetails(order){
    order.DeliveryOption = changeDeliveryOptionName(order.DeliveryOption);
    order.PaymentOption = changePaymentOptionName(order.PaymentOption);

    const orderDetails = new getOrderDetailsModel({
        orderId: order.OrderID,
        name: order.Name,
        surname: order.Surname,
        city: order.City,
        street: order.Street,
        houseNumber: order.HouseNumber,
        flatNumber: order.FlatNumber,
        postal: order.Postal,
        mail: order.Mail,
        phoneNumber: order.PhoneNumber,
        deliveryOption: order.DeliveryOption,
        paymentOption: order.PaymentOption,
        fullOrderPrice: order.FullOrderPrice,
        cart: order.Cart,
        orderDate: order.OrderDate,
        status: order.Status
    })

    return orderDetails;
}

function mapNewReservation(reservationData, dates){
    const reservation = new storeNewReservationModel({
        userId: reservationData.userId,
        cart: JSON.stringify(reservationData.cart),
        reservationDate: dates.currentDate,
        expirationDate: dates.expirationDate
    })

    return reservation;
}

function mapAllUserReservations(reservations){
    let userReservations = new reservationsModel();

    for(let i = 0; i < reservations.length; i++){
        let userReservation = mapSingleReservation(reservations[i]);
        userReservations.reservations.push(userReservation);
    }

    return userReservations;
}

function mapSingleReservation(reservation){
    const newExpirationDate = changeDateFormat(reservation.ExpirationDate);
    const newReservationDate = changeDateFormat(reservation.ReservationDate);

    const userReservation = new getReservationModel({
        reservationId: reservation.ReservationID,
        cart: JSON.parse(reservation.Cart),
        reservationDate: newReservationDate,
        expirationDate: newExpirationDate,
        status: reservation.Status
    })

    return userReservation;
}

module.exports = {mapNewOrder, mapAllUserOrders, mapOrderDetails, mapNewReservation, mapAllUserReservations}

function changePaymentOptionName(paymentOption){
    let newPaymentOptionName = '';
    switch(paymentOption){
        case 'pickup':{
            newPaymentOptionName = 'Płatność przy odbiorze'
            break;
        }
        case 'traditional':{
            newPaymentOptionName = 'Przelew tradycyjny'
            break;
        }
        case 'BLIK':{
            newPaymentOptionName = 'BLIK'
            break;
        }
    }

    return newPaymentOptionName;
}

function changeDeliveryOptionName(deliveryOption){
    let newDeliveryOptionName = '';

    switch(deliveryOption){
        case 'DHL':{
            newDeliveryOptionName = 'Kurier DHL'
            break;
        }
        case 'DPD':{
            newDeliveryOptionName = 'Kurier DPD'
            break;
        }
        case 'personal':{
            newDeliveryOptionName = 'Odbiór osobisty'
            break;
        }
    }

    return newDeliveryOptionName;
}

function changeDateFormat(date){
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;

}