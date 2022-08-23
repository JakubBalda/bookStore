const repository = require('../repositories/inmemory');
const booksMapper = require('../middleware/mapper');

function getBooks(req, res, next){
    let books = repository.readBooks();
    
    let booksDTO = booksMapper.mapToWebModel(books.books);
    
    return booksDTO;
}


module.exports = {getBooks};