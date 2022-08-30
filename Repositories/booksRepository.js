//TODO: addNewBook()
const mapper = require('../middleware/mapper');
const logger = require('../middleware/logger');
const database = require('../database');

function addNewBook(newBook, authorId){
    mapper.mapBookToStore(newBook, authorId);
}

function getBookById(bookId){
    let query = `SELECT * FROM Books WHERE ID = ${bookId}`;

    let bookDetails = database.sqlQuery(query);
    logger.logData(bookDetails);
    return bookDetails;
}

module.exports = {getBookById, addNewBook};