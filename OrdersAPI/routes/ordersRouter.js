const express = require('express');
const router = express.Router();
const { storeNewOrder, getUserOrders, getUserOrderDetails, storeNewReservation, getUserReservations, 
            cancelUserReservation } = require('../controllers/ordersController');

/* GET GetUserReservations /api/orders/getUserReservations */
router.get('/getReservations/:userId', getUserReservations);

/* GET GetUserOrders /api/orders/getUserOrders/:userId */
router.get('/getOrders/:userId', getUserOrders);

/* GET GetOrderDetails /api/orders/getOrderDetails/:orderId */
router.get('/getOrderDetails/:orderId', getUserOrderDetails);

/* POST StoreNewOrder /api/orders/storeNewOrder */
router.post('/storeNewOrder', storeNewOrder);

/* POST StoreNewREservation /api/orders/storeNewReservation */
router.post('/storeNewReservation', storeNewReservation);

/* PUT CancelUserReservation /api/orders/cancelReservation */
router.put('/cancelReservation', cancelUserReservation)

module.exports = router;
