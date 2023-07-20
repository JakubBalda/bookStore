var express = require('express');
var router = express.Router();
const { login, register } = require('../controllers/usersController');

/* POST users login. */
router.post('/login', login);

/* POST users register. */
router.post('/register', register);

module.exports = router;
