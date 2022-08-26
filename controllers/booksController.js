const getAllBooksUseCase = require('../services/getAllBooksUseCase');
const getBookUseCase = require('../services/getBookDetailsUseCase');
const logger = require('../middleware/logger');
const db = require('../database');


    async function getBooks(req, res, next){
        logRequest('getBooks',req);
        
        //let data = getAllBooksUseCase.getBooks();

        let data = await db.sqlQuery('SELECT * FROM books');
        res.send(data);
    }

    async function getBookDetails(req, res, next){
        logRequest('getBookDetails',req);

        let selectedBook = getBookUseCase.getBookDetails(req.params.id);
        res.send(selectedBook);
    }

    


module.exports = {getBooks, getBookDetails};

function logRequest(endpointName, req) {
    logger.logInformation(`${endpointName} endpoint requested`);
    logger.logRequest(req);
}

