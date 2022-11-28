const logger = require('../middleware/logger');
const validator = require('validator');

function validateBook(bookToStore){
    if(!validator.isEmpty(bookToStore)){
        return true;
    }
    return false;
}

function validateAuthor(author){
    if(author.name !== undefined  || author.surname !== undefined){
        return true;
    }
    return false;
}

module.exports = {validateBook, validateAuthor};