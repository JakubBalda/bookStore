var express = require('express');
var router = express.Router();
const { login, register, getAllUserData, updateUserData, updateUserPassword,
         storeFavouriteAuthors, getPreferences, storeFavouriteGenres, getUserDataToOrder } = require('../controllers/usersController');

/* POST Login /api/users/login. */
router.post('/login', login);

/* POST Register /api/users/register. */
router.post('/register', register);

/* GET GetAllUserData /api/users/:id. */
router.get('/:id', getAllUserData);

router.get('/orderData/:id', getUserDataToOrder);

/* PUT UpdateUserData /api/users/data/:id. */
router.put('/updateData/:id', updateUserData);

/* PUT UpdateUserData /api/users/password/:id. */
router.put('/updatePassword/:id', updateUserPassword);

/* POST StoreFavouriteAuthors /api/users/favouriteAuthors */
router.post('/favouriteAuthors', storeFavouriteAuthors)

/*GET GetFavouriteAuthors /api/users/getFavouriteAuthors/:id */
router.get('/getUserPreferences/:id', getPreferences)

/* POST StoreFavouriteGenres /api/users/favouriteGenres */
router.post('/favouriteGenres', storeFavouriteGenres)

module.exports = router;
