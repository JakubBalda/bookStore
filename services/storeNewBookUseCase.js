const mapper = require('../middleware/booksMapper');
const logger = require('../middleware/logger');
const booksRepository = require('../repositories/booksRepository');
const authorsRepository = require('../repositories/authorsRepository');
const authorModel = require('../models/domain/authorModel');
const booleanFunctions = require('../utils/booleanFunctions');


async function addNewAuthor(newAuthor){
    logger.logRequest('addNewAuthor requested');
    authorId = await authorsRepository.addNewAuthor(newAuthor);

    return authorId;
}

function addNewBook(newBook, authorId){
    booksRepository.addNewBook(newBook, authorId);
}

async function isBookInStore(isbn){
    let id = await booksRepository.findBookIdByIsbn(isbn);
    logger.logData(id[0]);
    
    return booleanFunctions.isNullOrUndefined(id[0]);
}

async function isAuthorInStore(author){
    let id = await authorsRepository.findAuthorByName(author);
    
    return booleanFunctions.isNullOrUndefined(id[0]);
}

async function storeNewBook(author, book){
    let authorId;

    if(!isAuthorInStore(author)){
        authorId = await addNewAuthor(author);
    }else{
        logger.logInformation('Podany autor już istnieje, wyszukuje w bazie danych');
        authorId = await authorsRepository.findAuthorByName(author);
    }

    bookToStore =  mapper.mapRequestToBookToStoreModel(book, authorId[0].ID);

    if(await isBookInStore(bookToStore.isbn)){
        addNewBook(bookToStore);
        logger.logInformation("Książka została dodana");

    }else{
        logger.logInformation("Książka już istnieje");
    }
}

module.exports = {storeNewBook};