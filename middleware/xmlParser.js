const fs = require('fs');   
const reader = require('xml2js');
const parser = new reader.Parser();
const logger = require('../middleware/logger');


function parseXml(){
    logger.startTask('Parsing XML data');
    let books;

    let xmlData = fs.readFileSync(__dirname+'/../data/books.xml','utf-8');
        parser.parseString(xmlData, (err, result) => {
            books = result;
        })

    let array = new Array(books.Books.Book);
    
    logger.endTask('Parsing XML data');
    return array;
}

module.exports.parseXml = parseXml;