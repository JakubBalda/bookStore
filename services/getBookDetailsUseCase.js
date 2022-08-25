const repository = require('../Repositories/inmemory');
const logger = require('../middleware/logger');

function getBookDetails(id){
    logger.logInformation('getAllBooksUseCase.getBooks requested');
    let bookDetails = repository.readBookById(id);
    
    logger.logData(bookDetails);
    return bookDetails; 
}

module.exports = {getBookDetails};