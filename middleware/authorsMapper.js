const storeAuthorModel = require('../models/web/storeBooksModels/authorModel')
const updateAuthorModel = require('../models/web/updateBooksModels/authorModel');

function mapRequestToAuthorToStoreModel(request){
    let newAuthor = new storeAuthorModel({
        name: request.authorName,
        surname: request.authorSurname
    });

    return newAuthor;
}

function mapAuthorToAuthorToUpdateModel(author, authorID){
    let existingAuthor = new updateAuthorModel({
        id: authorID,
        name: author.name,
        surname: author, surname
    })

    return existingAuthor;
}

module.exports = {mapRequestToAuthorToStoreModel, mapAuthorToAuthorToUpdateModel};