const logger = require('../../middleware/logger');
const booksRepository = require('../../repositories/booksRepository');
const authorsRepository = require('../../repositories/authorsRepository');
const booleanFunctions = require('../../utils/booleanFunctions');
const validate = require('../../utils/dataValidator'); 


async function addNewAuthor(newAuthor){
    logger.logRequest('addNewAuthor requested');
    authorId = await authorsRepository.addNewAuthor(newAuthor);

    return authorId;
}

async function addNewBook(newBook, bookImage){
    if(await booksRepository.addNewBook(newBook, bookImage)){
        return true;
    }else{
        return false;
    }
}

async function isBookInStore(isbn){
    let id = await booksRepository.findBookIdByIsbn(isbn);
    logger.logData(id[0]);
    
    return booleanFunctions.isNullOrUndefined(id[0]);
}

async function isAuthorInStore(author){
    let id = await authorsRepository.findAuthorByName(author);
    
    return booleanFunctions.isNullOrUndefined(id);
}

async function storeNewBook(author, book, bookImage){
    let authorId;

    if(!validate.validateAuthor(author)){
        return "Wystąpił błąd;"
    }else if(! await isAuthorInStore(author)){
        authorId = await addNewAuthor(author);
    }else{
        logger.logInformation('Podany autor już istnieje, wyszukuje w bazie danych');
        authorId = await authorsRepository.findAuthorByName(author);
    }

    book.author = authorId[0].ID;

    if(await isBookInStore(book.isbn)){
        if(validate.validateBook(book) && await addNewBook(book, bookImage)){
            logger.logInformation("Książka została dodana");

            return "Added";
        }else{
            logger.logInformation("Wystąpił błąd, książka nie została dodana");

            return "Wystąpił błąd, książka nie została dodana";
        }
    }else{
        logger.logInformation("Książka już istnieje");

        return "Książka już istnieje";
    }
}

module.exports = {storeNewBook};