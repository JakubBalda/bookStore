const inmemoryRepository = require('../repositories/inmemory');

function getBooks(req, res, next){
    let booksData = inmemoryRepository.readBooks();
    return booksData;
}
module.exports = {getBooks};