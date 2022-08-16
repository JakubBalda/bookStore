const getAllBooks = require('../services/getAllBooks.js');

module.exports = {
    getAllBooks(req, res, next){
        
        res.redirect('/');
    }
}