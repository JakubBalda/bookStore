const bookRepository = require('../../repositories/booksRepository')
const logger = require('../../middleware/logger');

async function getRatingByUserId(userId, bookId){
    logger.logInformation('getBookRatingUseCase.getRatingByUserId requested');

    let rating = await bookRepository.getBookRatingByUserId(userId, bookId);
    if(rating.length === 0){
        return {Rating: 0}
    }else{
        return rating[0]
    }
    
    return rating[0] === [] ? 0 : rating[0];
}

module.exports = {getRatingByUserId};