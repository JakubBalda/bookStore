const express = require('express');
const router = express.Router();
const { storeNewOrder, getUserOrders, getUserOrderDetails, storeNewReservation } = require('../controllers/ordersController');

/* GET GetUserOrders /api/orders/getUserOrders/:userId */
router.get('/getOrders/:userId', getUserOrders);

/* GET GetOrderDetails /api/orders/getOrderDetails/:orderId */
router.get('/getOrderDetails/:orderId', getUserOrderDetails);

/* POST StoreNewOrder /api/orders/storeNewOrder */
router.post('/storeNewOrder', storeNewOrder);

router.post('/storeNewReservation', storeNewReservation)

module.exports = router;
