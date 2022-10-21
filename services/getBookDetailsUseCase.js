const bookRepository = require('../repositories/booksRepository')
const authorsRepository = require('../repositories/authorsRepository')
const logger = require('../middleware/logger');
const mapper = require('../middleware/booksMapper');

async function getBookDetails(id){
    logger.logInformation('getBookDetailsCase.getBooksDetails requested');
    
    let bookDetails = await bookRepository.getBookDetailsById(id);

    if(bookDetails[0] != undefined){
        let authorId = bookDetails[0].AuthorID; 
        
        let author = await authorsRepository.getAuthorById(authorId);

        let selectedBook = mapper.mapSingleFromDbToWebModel(bookDetails[0], author[0]);
        
        return selectedBook; 
    }
    logger.logInformation("Wybrana książka nie istnieje");
}

module.exports = {getBookDetails};