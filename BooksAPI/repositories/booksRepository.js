const logger = require('../middleware/logger');
const database = require('../database');

async function getAllBooks(){
    let query = `SELECT ID, AuthorID, Title, Price, ImageBlob, ImageURL, Genre FROM Books`;

    let books = database.sqlQuery(query);
    return books;
}

async function addNewBook(book, bookImage){
    const imageHex = bookImage.toString('hex');

    let query = `INSERT INTO books (Title, AuthorID, ISBN, Description, ImageURL, Price, Amount, Publisher, PublishYear, PageAmount, Genre, ImageBlob) 
                    VALUES ('${book.title}', ${book.author}, '${book.isbn}',
                    '${book.description}', '${book.imageUrl}', ${book.price},
                    ${book.amount}, '${book.publisher}', ${book.publishYear},
                    ${book.pageAmount}, '${book.genre}', 0x${imageHex})`;

    if(database.sqlQuery(query)){
        return true;
    }else{
        return false;
    }
}

function getBookDetailsById(bookID){
    let query = `SELECT ID, AuthorID, Title, Price, Amount, Description, Publisher, 
                    PublishYear, Genre, ImageURL, ImageBlob, ISBN, PageAmount FROM Books WHERE ID = ${bookID}`;

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

async function updateBook(book, image){
    let query = '';

    if(image !== undefined){
        const imageHex = image.toString('hex');

        query = `UPDATE books SET Title = '${book.title}', 
                        ISBN = '${book.isbn}', Description = '${book.description}', 
                        Publisher = '${book.publisher}', Price = '${book.price}', Amount = '${book.amount}',
                        PublishYear = '${book.publishYear}', PageAmount = '${book.pageAmount}', Genre = '${book.genre}',
                        ImageURL = '${book.imageUrl}', ImageBlob = 0x${imageHex}
                        WHERE ID = ${book.id}`;
    }else{
        query = `UPDATE books SET Title = '${book.title}', 
                        ISBN = '${book.isbn}', Description = '${book.description}', 
                        Publisher = '${book.publisher}', Price = '${book.price}', Amount = '${book.amount}',
                        PublishYear = '${book.publishYear}', PageAmount = '${book.pageAmount}', Genre = '${book.genre}',
                        ImageURL = '${book.imageUrl}'
                        WHERE ID = ${book.id}`;
    }
    
    if(await database.sqlQuery(query)){
        return true;
    }else{
        return false;
    }
}

async function getGenres(location){
    let query;
    
    if(location !== 'userPanel'){
        query = `SELECT Genre FROM Books`;
    }else{
        query = `SELECT DISTINCT Genre FROM Books`;
    }

    let genres = database.sqlQuery(query);
    return genres;
}

module.exports = {getGenres, getBookDetailsById, addNewBook, findBookIdByIsbn, deleteBookById, updateBook, getAllBooks};