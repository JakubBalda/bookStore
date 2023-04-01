const repository = require('../repositories/booksRepository');
const booksMapper = require('../middleware/booksMapper');
const logger = require('../middleware/logger');

function deleteBook(bookID){
    logger.logInformation('deleteBookUseCase.deleteBook requested');

    if(repository.deleteBookById(bookID)){
        return "Książka usunięta poprawnie!";
    }else{
        return "Wystąpił błąd, książka nie została usunięta!";
    }
}


module.exports = {deleteBook};