const inmemoryRepository = require('../Repositories/inmemory');
const logger = require('../middleware/logger');

function getBookDetails(id){
    logger.startTask('book detalis');
    let bookDetails = inmemoryRepository.readBookById(id);
    
    return bookDetails; 
}

module.exports = {getBookDetails};