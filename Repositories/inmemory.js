    const parser = require('../middleware/xmlParser');
    const logger = require('../middleware/logger');
    const mapper = require('../middleware/mapper');
    var booksArray;
    
    function readBooks(){
        loadData();
            
        return mapper.createBook(booksArray);
    }

    function readBookById(bookId){
        loadData();

        

        return mapper.selectBook(bookId, booksArray);
    }

    function loadData(){
        if(booksArray === null || booksArray === undefined){
            booksArray = parser.parseXml();
        }
    }

module.exports = {readBooks, readBookById};
