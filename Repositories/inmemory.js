    const parser = require('../middleware/xmlParser');
    const logger = require('../middleware/logger');
    const mapper = require('../middleware/mapper');
    var booksArray;
    
    function readBooks(){
        loadData();
            
        return mapper.mapCollection(booksArray);
    }

    function readBookById(bookId){
        loadData();

        let book = booksArray[bookId-1];

        return mapper.mapSingle(book);
    }

    function loadData(){
        if(booksArray === null || booksArray === undefined){
            booksArray = parser.parseXml()[0];
        }
    }

module.exports = {readBooks, readBookById};
