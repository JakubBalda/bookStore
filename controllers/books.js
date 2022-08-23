const getAllBooks = require('../services/getAllBooks');
const getBook = require('../services/getBookDetails');

    async function getBooks(req, res, next){
        let data = getAllBooks.getBooks();
        // TODO:  getAllBooksUseCase.getBooks();
        res.send(data);
    }

    async function getBookDetails(req, res, next){
        let selectedBook = getBook.getBookDetails(req.params.id);
        // TODO: getBookUseCase;
        res.send(selectedBook);
    }

module.exports = {getBooks, getBookDetails};
