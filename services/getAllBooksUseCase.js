const repository = require('../repositories/inmemory');
const booksMapper = require('../middleware/mapper');

function getBooks(req, res, next){
    let booksModel = repository.readBooks();
    
    let booksDTO = booksMapper.mapToWebModel(booksModel.books);
    
    return booksDTO;
}


module.exports = {getBooks};