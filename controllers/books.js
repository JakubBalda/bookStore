const getAllBooks = require('../services/getAllBooks');
const parser  = require('../middleware/xmlParser');

    async function getBooks(req, res, next){
        /*console.log('start processing');
        let data = parser.parseXml(); 
        console.log('proscessing ended');
        res.send(data);  */
        
        let data = getAllBooks.getBooksFromMemory();
        
        //res.send(data);
    }

module.exports.getBooks = getBooks;
