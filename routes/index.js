const express = require('express');
const { get } = require('mongoose');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET /register */
router.get('/register', function(req, res, next) {
  res.send('GET /register')
});

/* POST /register */
router.post('/register', function(req, res, next) {
  res.send('POST /register')
});

/* GET /login */
router.get('/login', function(req, res, next) {
  res.send('GET /login')
});

/* POST /login */
router.post('/login', function(req, res, next) {
  res.send('POST /login')
});

/* GET /login */
router.get('/profile', function(req, res, next) {
  res.send('GET /profile')
});

/* PUT /login/:user_id */
router.put('/profile:/user_id', function(req, res, next) {
  res.send('GET /profile/:user_id')
});

/* GET /forgot-pw */
router.get('/forgot-pw', function(req, res, next) {
  res.send('GET /forgot-pw')
});

/* PUT /forgot-pw */
router.put('/forgot-pw', function(req, res, next) {
  res.send('PUT /forgot-pw')
});

/* GET /reset-pw/:token */
router.get('/reset-pw/:token', function(req, res, next) {
  res.send('GET /reset-pw/:token')
});

/* PUT /reset-pw/:token */
router.put('/reset-pw/:token', function(req, res, next) {
  res.send('PUT /reset-pw/:token')
});

module.exports = router;


