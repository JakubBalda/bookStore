const logger = require('../middleware/logger');
const ordersMapper = require('../middleware/ordersMapper');

const storeNewOrderUseCase = require('../services/storeNewOrderUseCase');

async function storeNewOrder(req, res, next){
    logRequest('storeNewOrder', req)
    const date = new Date();
    const currentDate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();

    const newOrder = ordersMapper.mapNewOrder(req.body, currentDate);
    const orderCart = req.body[2];

    const orderInformation = await storeNewOrderUseCase.storeNewOrder(newOrder, orderCart)
    res.send(orderInformation);
}

module.exports = { storeNewOrder }

function logRequest(endpointName, req) {
    logger.logInformation(`${endpointName} endpoint requested`);
    logger.logRequest(req);
}