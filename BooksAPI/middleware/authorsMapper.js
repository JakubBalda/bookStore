const storeAuthorModel = require('../models/web/storeBooksModels/authorModel')
const updateAuthorModel = require('../models/web/updateBooksModels/authorModel');
const authorsWebModel = require('../models/web/getBooksModels/authorsDTO');
const authorWebModel = require('../models/web/getBooksModels/authorDTO');

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
        name: author.authorName,
        surname: author.authorSurname
    })

    return existingAuthor;
}

function mapAuthorsToWebModel(authors){
    let authorsDTO = new authorsWebModel();

    for(let i = 0; i < authors.length; i++){
        let newWebAuthor = mapSingleAuthor(authors[i]);

        authorsDTO.authors.push(newWebAuthor);
    }
    return authorsDTO;
}

function mapSingleAuthor(author){
    let newAuthor = authorWebModel({
        id: Number(author.ID),
        name: String(author.name),
        surname: String(author.surname),
    });
    return newAuthor;
}

function mapOldAuthorDataToWebModel(oldAuthorData){
    let oldAuthor = authorWebModel({
        name: String(oldAuthorData.oldAuthorName),
        surname: String(oldAuthorData.oldAuthorSurname)
    })

    return oldAuthor;
}

module.exports = {mapAuthorsToWebModel, mapRequestToAuthorToStoreModel, mapAuthorToAuthorToUpdateModel, mapOldAuthorDataToWebModel};