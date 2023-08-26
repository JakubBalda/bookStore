const repository = require('../../repositories/booksRepository');
const logger = require('../../middleware/logger');

function deleteBook(bookID){
    logger.logInformation('deleteBookUseCase.deleteBook requested');

    if(repository.deleteBookById(bookID)){
        return "Deleted";
    }else{
        return "Error";
    }
}


module.exports = {deleteBook};