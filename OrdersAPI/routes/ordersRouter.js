const express = require('express');
const router = express.Router();
const { storeNewOrder, getUserOrders, getUserOrderDetails } = require('../controllers/ordersController');

/* GET GetUserOrders /api/orders/getUserOrders/:userId */
router.get('/getOrders/:userId', getUserOrders);

/* GET GetOrderDetails /api/orders/getOrderDetails/:orderId */
router.get('/getOrderDetails/:orderId', getUserOrderDetails);

/* POST StoreNewOrder /api/orders/storeNewOrder */
router.post('/storeNewOrder', storeNewOrder);

module.exports = router;
