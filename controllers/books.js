const getAllBooksUseCase = require('../services/getAllBooksUseCase');
const getBookUseCase = require('../services/getBookDetailsUseCase');

    async function getBooks(req, res, next){
        let data = getAllBooksUseCase.getBooks();
        res.send(data);
    }

    async function getBookDetails(req, res, next){
        let selectedBook = getBookUseCase.getBookDetails(req.params.id);
        res.send(selectedBook);
    }

    //TODO: getDbData [PoC]

module.exports = {getBooks, getBookDetails};
