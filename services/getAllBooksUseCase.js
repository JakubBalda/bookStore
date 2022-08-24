const repository = require('../repositories/inmemory');
const booksMapper = require('../middleware/mapper');
const logger = require('../middleware/logger');

function getBooks(req, res, next){
    logger.logInformation('getAllBooksUseCase.getBooks requested');

    let booksModel = repository.readBooks();
    
    let booksDTO = booksMapper.mapToWebModel(booksModel.books);

    logger.logData(booksDTO);
    return booksDTO;
}


module.exports = {getBooks};