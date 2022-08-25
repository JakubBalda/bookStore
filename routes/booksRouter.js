//TODO: booksRouter;
const express = require('express');
const router = express.Router();
const { getBooks } = require('../controllers/booksController');
const { getBookDetails } = require('../controllers/booksController');
const { getData } = require('../controllers/booksController');

/* GET GetlAllBooks /api/books */
router.get('/', getBooks);

router.get('/db', getData);

/* POST StoreBooks create /api/books */
router.post('/', (req, res, next) => {
    res.send('CREATE /api/books');
});

/* GET GetBook /api/books/:id */
router.get('/:id', getBookDetails);

module.exports = router;
