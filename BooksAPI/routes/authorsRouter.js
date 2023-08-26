const express = require('express');
const router = express.Router();
const { getAllAuthors, storeFavouriteAuthors } = require('../controllers/authorsController');

/* GET GetAllAuthors /api/authors/allAuthors */
router.get('/allAuthors', getAllAuthors);

/* POST StoreFavouriteAuthors /api/authors/favouriteAuthors */
router.post('favouriteAuthros', storeFavouriteAuthors)

module.exports = router;
