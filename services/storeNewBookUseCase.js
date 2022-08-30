const mapper = require('../middleware/mapper');
const logger = require('../middleware/logger');
const booksRepository = require('../repositories/booksRepository');
const authorsRepository = require('../repositories/authorsRepository');

function addNewAuthor(authorName, authorSurname){
    logger.logRequest('addNewAuthor requested');
    authorId = authorsRepository.addNewAuthor(authorName, authorSurname);

    return authorId;
}

function addNewBook(requestedParams, authorId){
    bookRepository.addNewBook(requestedParams, authorId);
}

module.export = {addNewAuthor, addNewBook};