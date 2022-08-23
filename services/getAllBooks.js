const repository = require('../repositories/inmemory');

function getBooks(req, res, next){
    let books = repository.readBooks();
    //let booksToReturn = booksMapper.map();
    return books;
}


module.exports = {getBooks};