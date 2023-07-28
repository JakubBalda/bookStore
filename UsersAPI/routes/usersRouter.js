var express = require('express');
var router = express.Router();
const { login, register, getAllUserData } = require('../controllers/usersController');

/* POST Login /api/users/login. */
router.post('/login', login);

/* POST Register /api/users/register. */
router.post('/register', register);

/* GET GetAllUserData /api/users/:id. */
router.get('/:id', getAllUserData);

module.exports = router;
