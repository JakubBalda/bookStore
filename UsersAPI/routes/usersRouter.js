var express = require('express');
var router = express.Router();
const { login, register, getAllUserData, updateUserData, updateUserPassword } = require('../controllers/usersController');

/* POST Login /api/users/login. */
router.post('/login', login);

/* POST Register /api/users/register. */
router.post('/register', register);

/* GET GetAllUserData /api/users/:id. */
router.get('/:id', getAllUserData);

/* PUT UpdateUserData /api/users/data/:id. */
router.put('/updateData/:id', updateUserData);

/* PUT UpdateUserData /api/users/password/:id. */
router.put('/updatePassword/:id', updateUserPassword);

module.exports = router;
