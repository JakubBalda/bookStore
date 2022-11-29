const storeAuthorModel = require('../models/web/storeBooksModels/authorModel')

function mapRequestToAuthorToStoreModel(request){
    let newAuthor = new storeAuthorModel({
        name: request.authorName,
        surname: request.authorSurname
    });

    return newAuthor;
}

module.exports = {mapRequestToAuthorToStoreModel};