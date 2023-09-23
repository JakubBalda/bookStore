const logger = require('../middleware/logger');
const ordersRepository = require('../repositories/ordersRepository');
const ordersMapper = require('../middleware/ordersMapper');

async function getDetails(orderId){
    let orderDetails = await ordersRepository.getOrderDetails(orderId);

    if(orderDetails !== undefined){
        orderDetails = ordersMapper.mapOrderDetails(orderDetails[0]);
    }

    return orderDetails;
}

module.exports = {getDetails};