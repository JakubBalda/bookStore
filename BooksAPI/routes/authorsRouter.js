const express = require('express');
const router = express.Router();
const { getAllAuthors, storeFavouriteAuthors } = require('../controllers/authorsController');

/* GET GetAllAuthors /api/authors/allAuthors */
router.get('/allAuthors', getAllAuthors);

module.exports = router;
