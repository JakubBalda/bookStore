const bookRepository = require('../repositories/booksRepository');
const authorsRepository = require('../repositories/authorsRepository');
const authorMapper = require('../middleware/authorsMapper');
const booksMapper = require('../middleware/booksMapper');
const validate = require('../utils/dataValidator');
const logger = require('../middleware/logger');

function updateDetails(author, book){
    logger.logInformation('updateBookDetailsUseCase.updateDetails requested');
    
    if(validate.validateAuthor(author) && validate.validateBook(book)){

        let authorID = authorsRepository.findAuthorByName(author);
        let authorToUpdate = authorMapper.mapAuthorToAuthorToUpdateModel(author, authorID);

        if(authorsRepository.updateAuthor(authorToUpdate)){
            logger.logInformation('Dane autora zostały poprawnie zaktualiowane, następnie aktualizacja danych książki');
            
            let bookID = bookRepository.findBookIdByIsbn(book.isbn);
            let bookToUpdate = booksMapper.mapRequestToBookToStoreModel(book, authorToUpdate.id, bookID);
            if(bookRepository.updateBook(bookToUpdate)){
                return 'Dane zostały poprawnie zaktualizowane';
            }else{
                return 'Wystąpił błąd z aktualizacją danych!';
            }
        }else{
            return 'Wystąpił błąd z aktualizacją danych!';
        }
    }else{
        return 'Błędne dane!'
    }
}


module.exports = {updateDetails};