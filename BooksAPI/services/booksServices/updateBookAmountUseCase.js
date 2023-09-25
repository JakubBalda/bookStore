const logger = require('../../middleware/logger');
const booksRepository = require('../../repositories/booksRepository');
const booksMapper = require('../../middleware/booksMapper');

async function updateAmount(books, method){
    logger.logInformation('updateBookamountUseCase.updateAmount requested');
    
    books = booksMapper.mapOrderedBooksToAmountChangeModel(books);
    console.log(books);

    if(method == 'decrease')
        return booksRepository.decreaseBookAmount(books);
    else if (method == 'increase')
        return booksRepository.increaseBookAmount(books);
}

module.exports = {updateAmount}