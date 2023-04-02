const getAllBooksUseCase = require('../services/getAllBooksUseCase');
const getBookUseCase = require('../services/getBookDetailsUseCase');
const storeNewBookUseCase = require('../services/storeNewBookUseCase');
const deleteBookUseCase = require('../services/deleteBookUseCase');
const updateDetails = require('../services/updateBookDetailsUseCase');
const logger = require('../middleware/logger');
const booksMapper = require('../middleware/booksMapper');
const authorsMapper = require('../middleware/authorsMapper');

    async function getBooks(req, res, next){
        logRequest('getBooks', req);
        
        let books = getAllBooksUseCase.getBooks();

        res.send(books);
    }

    async function getBookDetails(req, res, next){
        logRequest('getBookDetails', req);
        
        let selectedBook = await getBookUseCase.getBookDetails(req.params.id);
        res.send(selectedBook);
    }

    async function storeNewBook(req, res, next){
        logRequest('storeNewBook', req);
        
        let author = authorsMapper.mapRequestToAuthorToStoreModel(req.query);
        let book = booksMapper.mapRequestToBookToStoreModel(req.query);

        let information = await storeNewBookUseCase.storeNewBook(author, book);

        res.send(information);
    }

    async function deleteBook(req, res, next){
        logRequest('deleteBook', req);

        let deleteInformation = await deleteBookUseCase.deleteBook(req.params.id);

        res.send(deleteInformation);
    }

    async function updateBookDetails(req, res, next){
        logRequest('updateBookDetails', req);

        let author = authorsMapper.mapAuthorToAuthorToUpdateModel(req.query, null);
        let book = booksMapper.mapBookToBookToUpdateModel(req.query, req.params.id);

        let information = await updateDetails.updateDetails(author, book);

        res.send(information);
    }


module.exports = {getBooks, getBookDetails, storeNewBook, deleteBook, updateBookDetails};

function logRequest(endpointName, req) {
    logger.logInformation(`${endpointName} endpoint requested`);
    logger.logRequest(req);
}

