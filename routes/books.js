const express = require('express');
const router = express.Router();

/* GET GetlAllBooks /api/books */
router.get('/', (req, res, next) => {
    res.send('INDEX /api/books');
});

/* GET books new /api/books/new */
router.get('/new', (req, res, next) => {
    res.send('NEW /api/books/new');
});

/* POST StoreBooks create /api/books */
router.post('/', (req, res, next) => {
    res.send('CREATE /api/books');
});

/* GET GetBook /books/:id  ()*/
router.get('/:id', (req, res, next) => {
    res.send('SHOW /api/books/:id');
});

/* GET books edit /api/books/:id/edit */
router.get('/:id/edit', (req, res, next) => {
    res.send('EDIT /api/books/:id/edit');
});

/* PUT books update /api/books/:id */
router.put('/:id', (req, res, next) => {
    res.send('UPDATE /api/books/:id');
});

/* DELETE books destroy /api/books/:id */
router.delete('/:id', (req, res, next) => {
    res.send('DESTROY /api/books/:id');
});

module.exports = router;
