const logger = require('../middleware/logger');
const ordersMapper = require('../middleware/ordersMapper');

const storeNewOrderUseCase = require('../services/storeNewOrderUseCase');
const getAllUserOrdersUseCase = require('../services/getAllUserOrdersUseCase');
const getOrderDetailsUseCase = require('../services/getOrderDetailsUseCase');

async function getUserOrders(req, res, next){
    logRequest('getUserOrders', req);

    const userOrders = await getAllUserOrdersUseCase.getAllUserOrders(req.params.userId);

    res.send(userOrders);
}

async function getUserOrderDetails(req, res, next){
    logRequest('getUserOrderDetails', req);

    const orderDetails = await getOrderDetailsUseCase.getDetails(req.params.orderId)

    res.send(orderDetails);
}

async function storeNewOrder(req, res, next){
    logRequest('storeNewOrder', req);

    const date = new Date();
    const currentDate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();

    const newOrder = ordersMapper.mapNewOrder(req.body, currentDate);
    const orderCart = req.body[2];

    const orderInformation = await storeNewOrderUseCase.storeNewOrder(newOrder, orderCart)
    res.send(orderInformation);
}

module.exports = { storeNewOrder, getUserOrders, getUserOrderDetails }

function logRequest(endpointName, req) {
    logger.logInformation(`${endpointName} endpoint requested`);
    logger.logRequest(req);
}