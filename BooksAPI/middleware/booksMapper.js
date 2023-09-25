const booksModel = require('../models/domain/books');
const bookModel = require('../models/domain/bookModel');
const bookWebModel = require('../models/web/getBooksModels/bookDTO');
const booksWebModel = require('../models/web/getBooksModels/booksDTO');
const storeBookModel = require('../models/web/storeBooksModels/bookModel')
const updateBookModel = require('../models/web/updateBooksModels/bookModel');


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

function mapToWebModel(books, authors){
    let booksDTO = new booksWebModel();
    
    for(let i=0; i<books.length; i++){
        let newWebBook = mapSingleToWebModel(books[i], authors.authors[books[i].AuthorID-1]);
        booksDTO.books.push(newWebBook);
    }
    return booksDTO;
}

function mapSingleToWebModel(book, author){
    let newBook;
    if(book.ImageBlob !== null && book.ImageBlob !== undefined){
        newBook = new bookWebModel ({
            id: Number(book.ID),
            author: String(author.name + ' ' +author.surname),
            title: String(book.Title),
            price: Number(book.Price),
            imageBlob: Buffer(book.ImageBlob),
            imageUrl: String(book.ImageURL),
            genre: String(book.Genre),
        });
    }else{
        newBook = new bookWebModel ({
            id: Number(book.ID),
            author: String(author.name + ' ' +author.surname),
            title: String(book.Title),
            price: Number(book.Price),
            imageUrl: String(book.ImageURL),
            genre: String(book.Genre),
        });
    }
    return newBook; 
}

function mapSingleFromDbToWebModel(book, author){
    let newBook;
    if(book.ImageBlob !== undefined && book.PodcastLink !== undefined){
         newBook = new bookWebModel ({
            id: Number(book.ID),
            author: String(`${author.Name} ${author.Surname}`),
            title: String(book.Title),
            isbn: String(book.ISBN),
            imageUrl: String(book.ImageURL),
            imageBlob: Buffer(book.ImageBlob),
            amount: Number(book.Amount),
            price: Number(book.Price),
            description: String(book.Description),
            publisher: String(book.Publisher),
            publishYear: Number(book.PublishYear),
            pageAmount: Number(book.PageAmount),
            genre: String(book.Genre),
            podcastLink: String(book.PodcastLink)
        });
    }else if(book.ImageBlob === undefined && book.PodcastLink !== undefined){
        newBook = new bookWebModel ({
            id: Number(book.ID),
            author: String(`${author.Name} ${author.Surname}`),
            title: String(book.Title),
            isbn: String(book.ISBN),
            imageUrl: String(book.ImageURL),
            amount: Number(book.Amount),
            price: Number(book.Price),
            description: String(book.Description),
            publisher: String(book.Publisher),
            publishYear: Number(book.PublishYear),
            pageAmount: Number(book.PageAmount),
            genre: String(book.Genre),
            podcastLink: String(book.PodcastLink)
        });
    }else if(book.ImageBlob !== undefined && book.PodcastLink === undefined){
        newBook = new bookWebModel ({
            id: Number(book.ID),
            author: String(`${author.Name} ${author.Surname}`),
            title: String(book.Title),
            isbn: String(book.ISBN),
            imageUrl: String(book.ImageURL),
            imageBlob: Buffer(book.ImageBlob),
            amount: Number(book.Amount),
            price: Number(book.Price),
            description: String(book.Description),
            publisher: String(book.Publisher),
            publishYear: Number(book.PublishYear),
            pageAmount: Number(book.PageAmount),
            genre: String(book.Genre),
        });
    }else{
        newBook = new bookWebModel ({
            id: Number(book.ID),
            author: String(`${author.Name} ${author.Surname}`),
            title: String(book.Title),
            isbn: String(book.ISBN),
            imageUrl: String(book.ImageURL),
            amount: Number(book.Amount),
            price: Number(book.Price),
            description: String(book.Description),
            publisher: String(book.Publisher),
            publishYear: Number(book.PublishYear),
            pageAmount: Number(book.PageAmount),
            genre: String(book.Genre),
        });
    }

    return newBook;
}

function mapRequestToBookToStoreModel(request, authorId){
    let newBook = new storeBookModel({
        author: Number(authorId),
        title: String(request.title),
        price: Number(request.price),
        amount: Number(request.amount),
        imageUrl: String(request.bookPhotoUrl),
        isbn: String(request.isbn),
        description: String(request.description),
        publisher: String(request.publisher),
        publishYear: Number(request.publishYear),
        pageAmount: Number(request.pageAmount),
        genre: String(request.genre)
    })

    return newBook;
}

function mapBookToBookToUpdateModel(book, bookID){
    let bookToUpdate = new updateBookModel({
        id: Number(bookID),
        author: null,
        title: String(book.title),
        price: Number(book.price),
        amount: Number(book.amount),
        isbn: String(book.isbn),
        description: String(book.description),
        publisher: String(book.publisher),
        publishYear: Number(book.publishYear),
        pageAmount: Number(book.pageAmount),
        genre: String(book.genre),
        oldIsbn: String(book.oldIsbn),
        imageUrl: String(book.bookPhotoUrl)
    })

    return bookToUpdate;
}

function mapOrderedBooksToAmountChangeModel(books){
    let orderedBooks = [];

    for(let i = 0; i < books.length; i++){
        let book = mapSingleBookToAmountChangeModel(books[i]);

        orderedBooks.push(book);
    }

    return orderedBooks;
}

function mapSingleBookToAmountChangeModel(book){
    let newOrderedBook = new bookModel({
        id: book.bookId,
        amount: book.amount
    })

    return newOrderedBook;
}

module.exports = {mapCollection, mapSingle, mapToWebModel, mapSingleFromDbToWebModel, mapRequestToBookToStoreModel, 
                    mapBookToBookToUpdateModel, mapOrderedBooksToAmountChangeModel};