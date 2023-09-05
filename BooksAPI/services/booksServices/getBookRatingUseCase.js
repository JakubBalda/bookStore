const bookRepository = require('../../repositories/booksRepository')
const logger = require('../../middleware/logger');

async function getRatingByUserId(userId, bookId){
    logger.logInformation('getBookRatingUseCase.getRatingByUserId requested');

    let rating = await bookRepository.getBookRatingByUserId(userId, bookId);
    
    return rating.length === 0 ? {Rating: 0} : rating[0];
}

module.exports = {getRatingByUserId};