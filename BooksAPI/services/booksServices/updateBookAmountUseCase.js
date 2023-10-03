const logger = require('../../middleware/logger');
const booksRepository = require('../../repositories/booksRepository');
const booksMapper = require('../../middleware/booksMapper');

async function updateAmount(books, method){
    logger.logInformation('updateBookamountUseCase.updateAmount requested');
    
    console.log(books);

    if(method === 'decrease'){
        books = booksMapper.mapOrderedBooksToAmountChangeModel(books);

        return booksRepository.decreaseBookAmount(books);
    }
    else if (method === 'increase'){
        books = booksMapper.mapOrderedBooksToAmountChangeModel(books);

        return booksRepository.increaseBookAmount(books);
    }
    else if (method === 'autoIncrease'){
        books.forEach(booksCart => {
            booksCart = booksMapper.mapOrderedBooksToAmountChangeModel(booksCart);
            booksRepository.increaseBookAmount(booksCart);

            return true;
        });
    }
}

module.exports = {updateAmount}