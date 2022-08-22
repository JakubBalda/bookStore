const getAllBooks = require('../services/getAllBooks');
const getBook = require('../services/getBookDetails');

    async function getBooks(req, res, next){
        let data = getAllBooks.getBooks();
        res.send(data);
    }

    async function getBookDetails(req, res, next){
        console.log(req.params.id);
        let selectedBook = getBook.getBookDetails(req.params.id);
        res.send(selectedBook);
    }

module.exports = {getBooks, getBookDetails};
