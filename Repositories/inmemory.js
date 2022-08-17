    const parser = require('../middleware/xmlParser');
    const books = require('../models/books');
    const book = require('../models/book');
    
    function readBooksFromXmlFile(req, res, next){
        let xmlData = parser.parseXml();
        //const newBooks = books(xmlData);
        createBook(xmlData);
        //return newBooks;
        
    }

    function createBook(data){

        let newBook;
        let iterator = 1;
        const objectArray = Object.entries(data);
        
        objectArray.forEach(function(key,value){
            
            const objectArray2 = Object.entries(value);
                console.log(data);  
            })
            
    }

module.exports = {readBooksFromXmlFile};
