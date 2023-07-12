const repository = require('../repositories/booksRepository');
const booksMapper = require('../middleware/booksMapper');
const logger = require('../middleware/logger');

async function getBooks(req, res, next){
    logger.logInformation('getAllBooksUseCase.getBooks requested');

    let booksModel = await repository.getAllBooks();

    
    let booksDTO = booksMapper.mapToWebModel(booksModel);

    logger.logData(booksDTO);
    return booksDTO;
}


module.exports = {getBooks};