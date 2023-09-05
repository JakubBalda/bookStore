const bookRepository = require('../../repositories/booksRepository')
const logger = require('../../middleware/logger');

async function getAverageRating(bookId){
    logger.logInformation('getBookAverageRatingUseCase.getAverageRating requested')
    let allBookRatings = await bookRepository.getAllBookRatings(bookId);

    if(allBookRatings !== undefined){
        return {averageRating: countAverageRating(allBookRatings), rateCount: allBookRatings.length};
    }else{
        return {averageRating: 0, rateCount: 0};
    }
}

function countAverageRating(ratings){
    let sumOfRates = 0;

    for(let rating of ratings){
        sumOfRates += rating.Rating;
    }

    return sumOfRates / ratings.length;
}

module.exports = {getAverageRating};