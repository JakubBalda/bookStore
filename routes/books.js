const express = require('express');
const router = express.Router();

/* GET books index /books */
router.get('/', function(req, res, next) {
    res.send('INDEX /books');
});

/* GET books new /books/new */
router.get('/new', function(req, res, next) {
    res.send('NEW /books/new');
});

/* POST books create /books */
router.post('/', function(req, res, next) {
    res.send('CREATE /books');
});

/* GET books show /books/:id */
router.get('/:id', function(req, res, next) {
    res.send('SHOW /books/:id');
});

/* GET books edit /books/:id/edit */
router.get('/:id/edit', function(req, res, next) {
    res.send('EDIT /books/:id/edit');
});

/* PUT books update /books/:id */
router.put('/:id', function(req, res, next) {
    res.send('UPDATE /books/:id');
});

/* DELETE books destroy /books/:id */
router.delete('/:id', function(req, res, next) {
    res.send('DESTROY /books/:id');
});

module.exports = router;
