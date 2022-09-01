const logger = require('../middleware/logger');
const database = require('../database');

function addNewBook(bookToStore){
    let query = `INSERT INTO books (Title, AuthorID, ISBN, Description, ImageURL, Price, Amount) 
                    VALUES ('${bookToStore.title}', ${bookToStore.author}, '${bookToStore.isbn}',
                    '${bookToStore.description}',  '${bookToStore.imageUrl}',  ${bookToStore.price},
                    ${bookToStore.amount})`;

    database.sqlQuery(query);
}

function getBookById(bookId){
    let query = `SELECT * FROM Books WHERE ID = ${bookId}`;

    let bookDetails = database.sqlQuery(query);
    logger.logData(bookDetails);
    return bookDetails;
}

async function findBookByIsbn(isbn){
    let query = `SELECT ID FROM books WHERE ISBN = '${isbn}'`;

    let id = await database.sqlQuery(query);

    return id;
}

module.exports = {getBookById, addNewBook, findBookByIsbn};