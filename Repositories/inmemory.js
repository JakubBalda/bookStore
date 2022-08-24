    const parser = require('../middleware/xmlParser');
    const logger = require('../middleware/logger');
    const mapper = require('../middleware/mapper');
    var booksArray;
    
    //TODO: logging
    function readBooks(){
        logger.logInformation('readBooks from repository requested');
        loadData();
            
        let result =  mapper.mapCollection(booksArray);

        logger.logData(result);
        return result;
    }

    function readBookById(bookId){
        loadData();

        let book = booksArray[bookId-1];

        return mapper.mapSingle(book);
    }

    function loadData(){
        logger.startTask('loadData');

        if(booksArray === null || booksArray === undefined){
            booksArray = parser.parseXml()[0];
        }

        logger.endTask('loadData');
    }

module.exports = {readBooks, readBookById};
