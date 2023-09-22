const express = require('express');
const router = express.Router();
const { storeNewOrder } = require('../controllers/ordersController');

/* POST StoreNewOrder /api/orders/storeNewOrder */
router.post('/storeNewOrder', storeNewOrder);

module.exports = router;
