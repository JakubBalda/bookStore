const bookRepository = require('../../repositories/booksRepository')
const logger = require('../../middleware/logger');

async function updateRating(rating, userId, bookId){
    logger.logInformation('updateBookRatingUseCase.updateRating requested');

    return await bookRepository.updateBookRating(rating, userId, bookId);
}

module.exports = {updateRating};