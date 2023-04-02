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

function getBookDetailsById(bookID){
    let query = `SELECT ID, AuthorID, Title, Price, Amount FROM Books WHERE ID = ${bookID}`;

    let bookDetails = database.sqlQuery(query);
    logger.logData(bookDetails);
    return bookDetails;
}

async function findBookIdByIsbn(isbn){
    let query = `SELECT ID FROM books WHERE ISBN = '${isbn}'`;

    let id = await database.sqlQuery(query);

    return id;
}

function deleteBookById(bookID){
    let query = `DELETE FROM books WHERE ID = '${bookID}'`;

    if(database.sqlQuery(query)){
        return true;
    }else{
        return false;
    }
 
}

function updateBook(book){
    let query = `UPDATE books SET Title = '${book.title}', AuthorID = '${book.author}', 
                    ISBN = '${book.isbn}', Description = '${book.description}', 
                    ImageURL = '${book.imageUrl}', Price = '${book.price}', Amount = '${book.amount}'
                    WHERE ID = '${book.id}'`;
    
    if(database.sqlQuery(query)){
        return true;
    }else{
        return false;
    }
}

module.exports = {getBookDetailsById, addNewBook, findBookIdByIsbn, deleteBookById, updateBook};