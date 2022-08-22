const books = require('../models/books');
const book = require('../models/book');
const logger = require('../middleware/logger');


function createBook(data){
    let array = new Array(data.Books.Book);
    let newBookShelf = new books();
    
    for(let i=0;i<data.Books.Book.length;i++){
        let newBook = new book ({
            id: Number(array[0][i].Id),
            author: String(array[0][i].Author),
            title: String(array[0][i].Title),
            isbn: String(array[0][i].Isbn),
            price: Number(array[0][i].Price),
            imageUrl: String(array[0][i].ImageName),
            amount: Number(array[0][i].Amount),
            description: String(array[0][i].Description),
        });
        newBookShelf.books.push(newBook);
    }
    
    logger.endTask('mapping Books');
    return newBookShelf; 
}

function selectBook(bookId, data){
    logger.startTask('selecting book details');
    let array = new Array(data.Books.Book);
    
            let newBook = new book ({
                id: Number(array[0][bookId-1].Id),
                author: String(array[0][bookId-1].Author),
                title: String(array[0][bookId-1].Title),
                isbn: String(array[0][bookId-1].Isbn),
                price: Number(array[0][bookId-1].Price),
                imageUrl: String(array[0][bookId-1].ImageName),
                amount: Number(array[0][bookId-1].Amount),
                description: String(array[0][bookId-1].Description),
            });
            
    logger.endTask('selecting book details');
    return newBook;
}

module.exports = {createBook, selectBook};