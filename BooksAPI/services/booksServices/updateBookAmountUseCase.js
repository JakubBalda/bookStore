const logger = require('../../middleware/logger');
const booksRepository = require('../../repositories/booksRepository');
const booksMapper = require('../../middleware/booksMapper');

async function updateAmount(books){
    books = booksMapper.mapOrderedBooksToAmountChangeModel(books);
    console.log(books);

    return booksRepository.updateBookAmount(books)
}

module.exports = {updateAmount}