const storeNewOrderModel = require('../models/storeNewOrderModels/orderModel');
const ordersModel = require('../models/getOrdersModels/OrdersDTO');
const getOrderModel = require('../models/getOrdersModels/OrderDTO');

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
    switch(order.DeliveryOption){
        case 'DHL':{
            order.DeliveryOption = 'Kurier DHL'
            break;
        }
        case 'DPD':{
            order.DeliveryOption = 'Kurier DPD'
            break;
        }
        case 'personal':{
            order.DeliveryOption = 'Odbiór osobisty'
            break;
        }
    }

    switch(order.PaymentOption){
        case 'pickup':{
            order.PaymentOption = 'Płatność przy odbiorze'
            break;
        }
        case 'traditional':{
            order.PaymentOption = 'Przelew tradycyjny'
            break;
        }
    }
    const userOrder = new getOrderModel({
        orderId: order.OrderID,
        deliveryOption: order.DeliveryOption,
        paymentOption: order.PaymentOption,
        fullOrderPrice: order.FullOrderPrice,
        date: order.OrderDate
    });

    return userOrder;
}

module.exports = {mapNewOrder, mapAllUserOrders}