const bookRepository = require('../repositories/booksRepository')
const authorsRepository = require('../repositories/authorsRepository')
const logger = require('../middleware/logger');
const mapper = require('../middleware/mapper');

async function getBookDetails(id){
    logger.logInformation('getBookDetailsCase.getBooksDetails requested');
    
    let bookDetails = await bookRepository.getBookById(id);
    let authorId = bookDetails[0].AuthorID; 
    
    let author = await authorsRepository.getAuthorById(authorId);

    let selectedBook = mapper.mapSingleFromDbToWebModel(bookDetails[0], author[0]);
    
    return selectedBook; 
}

module.exports = {getBookDetails};