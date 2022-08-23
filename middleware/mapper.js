const books = require('../models/domain/books');
const book = require('../models/domain/book');
const logger = require('../middleware/logger');
const bookWebModel = require('../models/web/bookDTO');
const booksWebModel = require('../models/web/booksDTO');


function mapCollection(data){
    let newBookShelf = new books();

    for(let i=0; i<data.length; i++){

        let newBook = mapSingle(data[i]);

        newBookShelf.books.push(newBook);
    }
    
    return newBookShelf; 
}

function mapSingle(data){

    let newBook = new book ({
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
    return booksDTO.books;
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

module.exports = {mapCollection, mapSingle, mapToWebModel};