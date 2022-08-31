const getAllBooksUseCase = require('../services/getAllBooksUseCase');
const getBookUseCase = require('../services/getBookDetailsUseCase');
const storeNewBookUseCase = require('../services/storeNewBookUseCase');
const logger = require('../middleware/logger');
const db = require('../database');


    async function getBooks(req, res, next){
        logRequest('getBooks', req);
        
        let data = getAllBooksUseCase.getBooks();

        res.send(data);
    }

    async function getBookDetails(req, res, next){
        logRequest('getBookDetails', req);
        
        let selectedBook = await getBookUseCase.getBookDetails(req.params.id);
        res.send(selectedBook);
    }

    async function storeNewBook(req, res, next){
        logRequest('storeNewBook', req);
        console.log(req.query.authorName)

        let authorId = await storeNewBookUseCase.addNewAuthor(req.query.authorName, req.query.authorSurname);
        storeNewBookUseCase.addNewBook(req.query, authorId);
        res.send(authorId);
    }


module.exports = {getBooks, getBookDetails, storeNewBook};

function logRequest(endpointName, req) {
    logger.logInformation(`${endpointName} endpoint requested`);
    logger.logRequest(req);
}

