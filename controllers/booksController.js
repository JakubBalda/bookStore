const getAllBooksUseCase = require('../services/getAllBooksUseCase');
const getBookUseCase = require('../services/getBookDetailsUseCase');
const logger = require('../middleware/logger');


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

    


module.exports = {getBooks, getBookDetails};

function logRequest(endpointName, req) {
    logger.logInformation(`${endpointName} endpoint requested`);
    logger.logRequest(req);
}

