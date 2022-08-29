const parser = require('../middleware/xmlParser');
const logger = require('../middleware/logger');
const mapper = require('../middleware/mapper');
var booksArray;

function readBooks(){
    logger.logInformation('readBooks from repository requested');
    loadData();
        
    let result =  mapper.mapCollection(booksArray);

    logger.logData(result);
    return result;
}

function readBookById(bookId){
    logger.logInformation('readBookById from repository requested');
    loadData();

    let book = booksArray[bookId-1];
    let bookWithDetails = mapper.mapSingle(book);;

    logger.logData(bookWithDetails);
    return bookWithDetails;
}

function loadData(){
    logger.startTask('loadData');

    if(booksArray === null || booksArray === undefined){
        booksArray = parser.parseXml()[0];
    }

    logger.endTask('loadData');
}

module.exports = {readBooks, readBookById};
