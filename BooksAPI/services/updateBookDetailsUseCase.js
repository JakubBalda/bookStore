const bookRepository = require('../repositories/booksRepository');
const authorsRepository = require('../repositories/authorsRepository');
const authorMapper = require('../middleware/authorsMapper');
const validate = require('../utils/dataValidator');
const logger = require('../middleware/logger');

async function updateDetails(author, book, oldAuthor){
    logger.logInformation('updateBookDetailsUseCase.updateDetails requested');
    
    if(validate.validateAuthor(author) && validate.validateBook(book)){

        let authorID = await authorsRepository.findAuthorByName(oldAuthor);
        author.id = authorID[0].ID;

        if(await authorsRepository.updateAuthor(author)){
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

async function isbnExists(isbn){

} 

module.exports = {updateDetails};