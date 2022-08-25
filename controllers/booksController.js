const getAllBooksUseCase = require('../services/getAllBooksUseCase');
const getBookUseCase = require('../services/getBookDetailsUseCase');
const logger = require('../middleware/logger');
const database = require('../databaseConnection');


    async function getBooks(req, res, next){
        logRequest('getBooks',req);
        
        let data = getAllBooksUseCase.getBooks();
        res.send(data);
    }

    async function getBookDetails(req, res, next){
        logRequest('getBookDetails',req);

        let selectedBook = getBookUseCase.getBookDetails(req.params.id);
        res.send(selectedBook);
    }

    async function getData(req, res, next){
        logRequest('getDbData', req);
        let query = 'SELECT * FROM books';

        let result = await database.sqlQuery(query);     

        res.send(result);
    }

    


    //TODO: getDbData [PoC]

module.exports = {getBooks, getBookDetails, getData};

function logRequest(endpointName, req) {
    logger.logInformation(`${endpointName} endpoint requested`);
    logger.logRequest(req);
}

