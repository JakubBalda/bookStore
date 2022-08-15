const express = require('express');
const { postRegister } = require('../controllers/index');
const router = express.Router();
const { errorHandler } = require('../middleware/index');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

/* GET /register */
router.get('/register', (req, res, next) => {
  res.send('GET /register')
});

/* POST /register */
router.post('/register', errorHandler(postRegister));

/* GET /login */
router.get('/login', (req, res, next) => {
  res.send('GET /login')
});

/* POST /login */
router.post('/login', (req, res, next) => {
  res.send('POST /login')
});

/* GET /login */
router.get('/profile', (req, res, next) => {
  res.send('GET /profile')
});

/* PUT /login/:user_id */
router.put('/profile:/user_id', (req, res, next) => {
  res.send('GET /profile/:user_id')
});

/* GET /forgot-pw */
router.get('/forgot-pw', (req, res, next) => {
  res.send('GET /forgot-pw')
});

/* PUT /forgot-pw */
router.put('/forgot-pw', (req, res, next) => {
  res.send('PUT /forgot-pw')
});

/* GET /reset-pw/:token */
router.get('/reset-pw/:token', (req, res, next) => {
  res.send('GET /reset-pw/:token')
});

/* PUT /reset-pw/:token */
router.put('/reset-pw/:token', (req, res, next) => {
  res.send('PUT /reset-pw/:token')
});

module.exports = router;


