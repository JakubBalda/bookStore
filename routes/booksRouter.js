const express = require('express');
const router = express.Router();
const { getBooks } = require('../controllers/booksController');
const { getBookDetails } = require('../controllers/booksController');
const { storeNewBook } = require('../controllers/booksController');
const { deleteBook } = require('../controllers/booksController');
const { updateBookDetails } = require('../controllers/booksController');

/* GET GetlAllBooks /api/books */
router.get('/', getBooks);

/* POST StoreBook api/books/new */
router.post('/new', storeNewBook);

/* GET GetBook /api/books/:id */
router.get('/:id', getBookDetails);

/* DELETE DeleteBook /api/books/:id */
router.delete('/:id', deleteBook);

/* PUT UpdateDetails /api/books/:id */
router.put('/:id', updateBookDetails);

module.exports = router;
