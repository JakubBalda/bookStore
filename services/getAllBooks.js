const readFromXmlFile = require('../repositories/inmemory');

function getBooksFromMemory(req, res, next){
    let booksData = readFromXmlFile.readBooksFromXmlFile();
    return booksData;
}
module.exports = {getBooksFromMemory};