const booksRepository = require('../repositories/booksRepository');
const autorsRepository = require('../Repositories/authorsRepository');
const booksMapper = require('../middleware/booksMapper');
const authorsMapper = require('../middleware/authorsMapper');
const logger = require('../middleware/logger');
const authorDTO = require('../models/web/getBooksModels/authorDTO');

async function getBooks(req, res, next){
    logger.logInformation('getAllBooksUseCase.getBooks requested');

    let booksModel = await booksRepository.getAllBooks();
    let authors = await autorsRepository.getAllAuthors();

    let authorsDTO = authorsMapper.mapAuthorsToWebModel(authors);
    let booksDTO = booksMapper.mapToWebModel(booksModel, authorsDTO);

    return booksDTO;
}


module.exports = {getBooks};