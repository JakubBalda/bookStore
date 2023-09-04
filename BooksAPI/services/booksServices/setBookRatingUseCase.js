const bookRepository = require('../../repositories/booksRepository')
const logger = require('../../middleware/logger');

async function setBookRating(rating, userId, bookId){
    logger.logInformation('setBookRatingUseCase.setBookRating requested');

    return await bookRepository.setBookRating(rating, userId, bookId);
}

module.exports = {setBookRating};