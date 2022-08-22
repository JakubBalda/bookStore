    const parser = require('../middleware/xmlParser');
    const logger = require('../middleware/logger');
    const mapper = require('../middleware/mapper');
    var xmlData;
    
    function readBooks(){
        loadData();
            
        return mapper.createBook(xmlData);
    }

    function readBookById(bookId){
        loadData();
        return mapper.selectBook(bookId, xmlData);
    }

    function loadData(){
        if(xmlData === null || xmlData === undefined){
            xmlData = parser.parseXml();
        }
    }

module.exports = {readBooks, readBookById};
