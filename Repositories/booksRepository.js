const logger = require('../middleware/logger');
const database = require('../database');

async function getAllBooks(){
    let query = `SELECT ID, AuthorID, Title, Price, ImageBlob, ImageURL FROM Books`;

    let books = database.sqlQuery(query);
    return books;
}

function addNewBook(bookToStore){
    let query = `INSERT INTO books (Title, AuthorID, ISBN, Description, ImageURL, Price, Amount, Publisher, PublishYear, PageAmount, Genre) 
                    VALUES ('${bookToStore.title}', ${bookToStore.author}, '${bookToStore.isbn}',
                    '${bookToStore.description}',  '${bookToStore.imageUrl}',  ${bookToStore.price},
                    ${bookToStore.amount}, ${bookToStore.publisher}, ${bookToStore.publishYear},
                    ${bookToStore.pageAmount}, ${bookToStore.genre})`;

    if(database.sqlQuery(query)){
        return true;
    }else{
        return false;
    }
}

function getBookDetailsById(bookID){
    let query = `SELECT ID, AuthorID, Title, Price, Amount, Description, Publisher, 
                    PublishYear, Genre, ImageURL, ISBN, PageAmount FROM Books WHERE ID = ${bookID}`;

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

async function updateBook(book){
    let query = `UPDATE books SET Title = '${book.title}', 
                    ISBN = '${book.isbn}', Description = '${book.description}', 
                    ImageURL = '${book.imageUrl}', Price = '${book.price}', Amount = '${book.amount}'
                    WHERE ID = ${book.id}`;
    
    if(await database.sqlQuery(query)){
        return true;
    }else{
        return false;
    }
}

async function getGenres(){
    let query = `SELECT Genre FROM Books`;

    let genres = database.sqlQuery(query);
    return genres;
}

module.exports = {getGenres, getBookDetailsById, addNewBook, findBookIdByIsbn, deleteBookById, updateBook, getAllBooks};