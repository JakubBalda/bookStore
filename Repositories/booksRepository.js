const mapper = require('../middleware/mapper');
const logger = require('../middleware/logger');
const database = require('../database');

function addNewBook(newBook, authorId){
    bookToStore = mapper.mapBookToStore(newBook, authorId);

    if(findBook(bookToStore.isbn) === false){
        let query = `INSERT INTO books (Title, AuthorID, ISBN, Description, ImageURL, Price, Amount) 
                        VALUES ('${bookToStore.title}', ${bookToStore.author}, '${bookToStore.isbn}',
                        '${bookToStore.description}',  '${bookToStore.imageUrl}',  ${bookToStore.price},
                        ${bookToStore.amount})`;

        database.sqlQuery(query);
    }else{
        logger.logInformation("Książka już istnieje");
    }
    
}

function getBookById(bookId){
    let query = `SELECT * FROM Books WHERE ID = ${bookId}`;

    let bookDetails = database.sqlQuery(query);
    logger.logData(bookDetails);
    return bookDetails;
}

async function findBook(isbn){
    let query = `SELECT ID FROM books WHERE ISBN = '${isbn}'`;

    let ID = await database.sqlQuery(query);

    if(ID[0] === undefined) 
        return true;
    return false;
}

module.exports = {getBookById, addNewBook};