const logger = require('../middleware/logger');

function validateBook(bookToStore){
    if(bookToStore !== undefined){
        if(bookToStore.title === undefined)
            return false;

        if(bookToStore.isbn === undefined)
            return false;

        if(bookToStore.description === undefined)
            return false;

        if(bookToStore.imgURL === undefined)
            return false;
        
        if(bookToStore.price === undefined)
            return false;

        if(bookToStore.amount === undefined)
            return false;

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