const repository = require('../repositories/inmemory');
const bookRepository = require('../repositories/bookRepository')
const authorsRepository = require('../repositories/authorsRepository')
const logger = require('../middleware/logger');

function getBookDetails(id){
    logger.logInformation('getBookDetailsCase.getBooksDetails requested');
    //let bookDetails = repository.readBookById(id);
    let bookDetails = bookRepository.getBookById(id);
    
    logger.logData(bookDetails);
    return bookDetails; 
}

module.exports = {getBookDetails};