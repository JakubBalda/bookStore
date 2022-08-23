const books = require('../models/domain/books');
const book = require('../models/domain/book');
const logger = require('../middleware/logger');


function createBook(data){
    let booksArray = data[0];
    let newBookShelf = new books();

    for(let i=0; i<booksArray.length; i++){

        let bookInArray = booksArray[i];

        let newBook = new book ({
            id: Number(bookInArray.Id),
            author: String(bookInArray.Author),
            title: String(bookInArray.Title),
            isbn: String(bookInArray.Isbn),
            price: Number(bookInArray.Price),
            imageUrl: String(bookInArray.ImageName),
            amount: Number(bookInArray.Amount),
            description: String(bookInArray.Description),
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