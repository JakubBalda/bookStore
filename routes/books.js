const express = require('express');
const router = express.Router();
const getAllBooks = require('../controllers/book.js');

/* GET GetlAllBooks /api/books */
router.get('/', getAllBooks);

/* POST StoreBooks create /api/books */
router.post('/', (req, res, next) => {
    res.send('CREATE /api/books');
});

/* GET GetBook /api/books/:id  ()*/
router.get('/:id', (req, res, next) => {
    res.send('SHOW /api/books/:id');
});

module.exports = router;
