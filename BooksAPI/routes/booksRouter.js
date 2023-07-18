const express = require('express');
const router = express.Router();
const { getBooks, updateBookDetails, getBookDetails, storeNewBook, deleteBook, getBookGenres} = require('../controllers/booksController');

/* GET GetlAllBooks /api/books */
router.get('/', getBooks);

/* POST StoreBook /api/books/new */
router.post('/new', storeNewBook);

/*Get BookGenres /api/books/genres */
router.get('/genres', getBookGenres);

/* GET GetBook /api/books/:id */
router.get('/:id', getBookDetails);

/* DELETE DeleteBook /api/books/:id */
router.delete('/:id', deleteBook);

/* PUT UpdateDetails /api/books/:id */
router.put('/:id', updateBookDetails);



module.exports = router;
