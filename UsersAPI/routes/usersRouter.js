var express = require('express');
var router = express.Router();
const { login } = require('../controllers/usersController');

/* POST users login. */
router.post('/login', login);

module.exports = router;