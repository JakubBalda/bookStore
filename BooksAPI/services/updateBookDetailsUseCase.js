const bookRepository = require('../repositories/booksRepository');
const authorsRepository = require('../repositories/authorsRepository');
const authorMapper = require('../middleware/authorsMapper');
const booksMapper = require('../middleware/booksMapper');
const validate = require('../utils/dataValidator');
const logger = require('../middleware/logger');

async function updateDetails(author, book){
    logger.logInformation('updateBookDetailsUseCase.updateDetails requested');
    
    if(validate.validateAuthor(author) && validate.validateBook(book)){

        let authorID = await authorsRepository.findAuthorByName(author);
        authorToUpdate = authorMapper.mapAuthorToAuthorToUpdateModel(author, authorID[0].ID);

        if(await authorsRepository.updateAuthor(authorToUpdate)){
            logger.logInformation('Dane autora zostały poprawnie zaktualizowane, następnie aktualizacja danych książki');
            
            book.author = author.id;
            if(await bookRepository.updateBook(book)){
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