const booksModel = require('../models/domain/books');
const bookModel = require('../models/domain/bookModel');
const logger = require('../middleware/logger');
const bookWebModel = require('../models/web/getBooksModels/bookDTO');
const booksWebModel = require('../models/web/getBooksModels/booksDTO');


function mapCollection(data){
    let newBookShelf = new booksModel();

    for(let i=0; i<data.length; i++){

        let newBook = mapSingle(data[i]);

        newBookShelf.books.push(newBook);
    }
    
    return newBookShelf; 
}

function mapSingle(data){

    let newBook = new bookModel ({
        id: Number(data.Id),
        author: String(data.Author),
        title: String(data.Title),
        isbn: String(data.Isbn),
        price: Number(data.Price),
        imageUrl: String(data.ImageName),
        amount: Number(data.Amount),
        description: String(data.Description),
    });

    return newBook; 
}

function mapToWebModel(data){
    let booksDTO = new booksWebModel();
    
    for(let i=0; i<data.length; i++){
        let newWebBook = mapSingleToWebModel(data[i]);
        
        booksDTO.books.push(newWebBook);
    }
    return booksDTO;
}

function mapSingleToWebModel(data){
    
    let newBook = new bookWebModel ({
        id: Number(data.id),
        author: String(data.author),
        title: String(data.title),
        price: Number(data.price),
        amount: Number(data.amount),
    });

    return newBook; 
}

function mapSingleFromDbToWebModel(book, author){

    let newBook = new bookWebModel ({
        id: Number(book.ID),
        author: String(`${author.Name} ${author.Surname}`),
        title: String(book.Title),
        price: Number(book.Price),
        amount: Number(book.Amount),
    });

    return newBook;
}

module.exports = {mapCollection, mapSingle, mapToWebModel, mapSingleFromDbToWebModel};