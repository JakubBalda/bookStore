const getAllBooks = require('../services/getAllBooks');

    async function getBooks(req, res, next){
        
        let data = getAllBooks.getBooks();
        
        res.send(data);
    }

module.exports.getBooks = getBooks;
