const logger = require('../middleware/logger');
const database = require('../database');

function addNewBook(bookToStore){
    let query = `INSERT INTO books (Title, AuthorID, ISBN, Description, ImageURL, Price, Amount) 
                    VALUES ('${bookToStore.title}', ${bookToStore.author}, '${bookToStore.isbn}',
                    '${bookToStore.description}',  '${bookToStore.imageUrl}',  ${bookToStore.price},
                    ${bookToStore.amount})`;

    if(database.sqlQuery(query)){
        return true;
    }else{
        return false;
    }
}

function getBookDetailsById(bookId){
    let query = `SELECT ID, AuthorID, Title, Price, Amount FROM Books WHERE ID = ${bookId}`;

    let bookDetails = database.sqlQuery(query);
    logger.logData(bookDetails);
    return bookDetails;
}

async function findBookIdByIsbn(isbn){
    let query = `SELECT ID FROM books WHERE ISBN = '${isbn}'`;

    let id = await database.sqlQuery(query);

    return id;
}

module.exports = {getBookDetailsById, addNewBook, findBookIdByIsbn};