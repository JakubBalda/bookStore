const logger = require('../middleware/logger');
const ordersRepository = require('../repositories/ordersRepository');
const ordersMapper = require('../middleware/ordersMapper');

async function getAllUserOrders(userId){
    logger.logInformation('getAllUserOrdersUseCase.getAllUserOrders requested');

    let userOrders = await ordersRepository.getUserOrders(userId);

    if(userOrders !== undefined){
        userOrders = ordersMapper.mapAllUserOrders(userOrders);

        return userOrders;
    }else{
        return userOrders;
    }
    
}

module.exports = {getAllUserOrders};