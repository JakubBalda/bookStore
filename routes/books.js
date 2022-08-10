const express = require('express');
const router = express.Router();

/* GET books index /books */
router.get('/', function(req, res, next) {
    res.send('/books');
});

module.exports = router;
