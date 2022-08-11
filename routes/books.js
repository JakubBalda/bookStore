const express = require('express');
const router = express.Router();

/* GET books index /books */
router.get('/', (req, res, next) => {
    res.send('INDEX /books');
});

/* GET books new /books/new */
router.get('/new', (req, res, next) => {
    res.send('NEW /books/new');
});

/* POST books create /books */
router.post('/', (req, res, next) => {
    res.send('CREATE /books');
});

/* GET books show /books/:id */
router.get('/:id', (req, res, next) => {
    res.send('SHOW /books/:id');
});

/* GET books edit /books/:id/edit */
router.get('/:id/edit', (req, res, next) => {
    res.send('EDIT /books/:id/edit');
});

/* PUT books update /books/:id */
router.put('/:id', (req, res, next) => {
    res.send('UPDATE /books/:id');
});

/* DELETE books destroy /books/:id */
router.delete('/:id', (req, res, next) => {
    res.send('DESTROY /books/:id');
});

module.exports = router;
