const express = require('express');
const router = express.Router();
const { getBooks, updateBookDetails, getBookDetails, storeNewBook,
            deleteBook, getBookGenres, setBookRating, getBookAverageRating,
            getBookRatingByUserId, updateBookRating} = require('../controllers/booksController');

/* GET GetlAllBooks /api/books */
router.get('/', getBooks);

/* POST StoreBook /api/books/new */
router.post('/new', storeNewBook);

/*Get BookGenres /api/books/genres/:location */
router.get('/genres/:location', getBookGenres);

/* GET GetBook /api/books/:id */
router.get('/:id', getBookDetails);

/* DELETE DeleteBook /api/books/:id */
router.delete('/:id', deleteBook);

/* PUT UpdateBookRating /api/books/updateBookRating */
router.put('/updateBookRating', updateBookRating);

/* PUT UpdateDetails /api/books/:id */
router.put('/:id', updateBookDetails);

/* POST SetBookRating /api/books/setBookRating*/
router.post('/setBookRating', setBookRating);

/* GET GetAverageRating /api/books/averageRating/:bookId */
router.get('/averageRating/:bookId', getBookAverageRating);

/* GET GetUserRating /api/books/userRating/:userId/:bookId */
router.get('/userRating/:userId/:bookId', getBookRatingByUserId);

module.exports = router;
