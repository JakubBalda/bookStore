//TODO: booksRouter;
const express = require('express');
const router = express.Router();
const { getBooks } = require('../controllers/books');
const { getBookDetails } = require('../controllers/books');

/* GET GetlAllBooks /api/books */
router.get('/', getBooks);

/* POST StoreBooks create /api/books */
router.post('/', (req, res, next) => {
    res.send('CREATE /api/books');
});

/* GET GetBook /api/books/:id */
router.get('/:id', getBookDetails);

module.exports = router;
