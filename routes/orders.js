const express = require('express');
const router = express.Router();

/* GET orders index /orders */
router.get('/', function(req, res, next) {
    res.send('INDEX /orders');
});

/* GET orders new /orders/new */
router.get('/new', function(req, res, next) {
    res.send('NEW /orders/new');
});

/* POST orders create /orders */
router.post('/', function(req, res, next) {
    res.send('CREATE /orders');
});

/* GET orders show /orders/:order_id */
router.get('/:order_id', function(req, res, next) {
    res.send('SHOW /orders/:order_id');
});

/* GET orders edit /orders/:order_id/edit */
router.get('/:order_id/edit', function(req, res, next) {
    res.send('EDIT /orders/:order_id/edit');
});

/* PUT orders update /orders/:order_id */
router.put('/:order_id', function(req, res, next) {
    res.send('UPDATE /orders/:order_id');
});

/* DELETE orders destroy /orders/:order_id */
router.delete('/:order_id', function(req, res, next) {
    res.send('DESTROY /orders/:order_id');
});

module.exports = router;
