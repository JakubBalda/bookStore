const fs = require('fs');   
const reader = require('xml2js');
const parser = new reader.Parser();

function parseXml(){
    console.log('parsing started');
    let books;

    let xmlData = fs.readFileSync(__dirname+'/../data/books.xml','utf-8');
        parser.parseString(xmlData, (err, result) => {
            books = result;
        })

    let array = new Array(books.Books.Book);

    return array;
}

module.exports.parseXml = parseXml;