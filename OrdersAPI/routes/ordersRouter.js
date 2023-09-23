const express = require('express');
const router = express.Router();
const { storeNewOrder, getUserOrders } = require('../controllers/ordersController');

/*GET GetUserOrders /api/orders/getUserOrders */
router.get('/getOrders/:userId', getUserOrders);

/* POST StoreNewOrder /api/orders/storeNewOrder */
router.post('/storeNewOrder', storeNewOrder);

module.exports = router;
