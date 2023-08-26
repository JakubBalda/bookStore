const bookRepository = require('../../repositories/booksRepository')
const authorsRepository = require('../../repositories/authorsRepository')
const logger = require('../../middleware/logger');
const mapper = require('../../middleware/booksMapper');
const booleanFunctions = require('../../utils/booleanFunctions');

async function getBookDetails(id){
    logger.logInformation('getBookDetailsCase.getBooksDetails requested');
    
    let bookDetails = await bookRepository.getBookDetailsById(id);
    console.log(typeof(bookDetails[0].ImageBlob));
    if(!booleanFunctions.isNullOrUndefined(bookDetails[0])){
        let authorId = bookDetails[0].AuthorID; 
        
        let author = await authorsRepository.getAuthorById(authorId);

        let selectedBook = mapper.mapSingleFromDbToWebModel(bookDetails[0], author[0]);
        
        return selectedBook; 
    }
    logger.logInformation("Wybrana książka nie istnieje");
}

module.exports = {getBookDetails};