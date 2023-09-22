const logger = require('../middleware/logger');
const ordersMapper = require('../middleware/ordersMapper');

const storeNewOrderUseCase = require('../services/storeNewOrderUseCase');

async function storeNewOrder(req, res, next){
    logRequest('storeNewOrder', req)

    const newOrder = ordersMapper.mapNewOrder(req.body);
    const orderCart = req.body[2];

    const orderInformation = storeNewOrderUseCase.storeNewOrder(newOrder, orderCart)
    res.send('info');
}

module.exports = { storeNewOrder }

function logRequest(endpointName, req) {
    logger.logInformation(`${endpointName} endpoint requested`);
    logger.logRequest(req);
}