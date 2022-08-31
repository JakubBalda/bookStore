const mapper = require('../middleware/mapper');
const logger = require('../middleware/logger');
const database = require('../database');

function getAuthorById(authorId){
    logger.logInformation('getAuthorById requested');
    let query = `SELECT * FROM authors WHERE ID = ${authorId}`;

    let author = database.sqlQuery(query);
    logger.logData(author);
    return author;
}

function addNewAuthor(authorName, authorSurname){
    authorId = findAuthor(authorName, authorSurname);

    if(authorId === undefined){
        let query = `INSERT INTO authors (name, surname) VALUES ('${authorName}', '${authorSurname}')`;

        database.sqlQuery(query);
        authorId = findAuthor(authorName, authorSurname);
    }

    return authorId;
}

function findAuthor(authorName, authorSurname){
    let query = `SELECT id FROM authors WHERE name = '${authorName}' AND surname = '${authorSurname}'`;

    let authorId = database.sqlQuery(query);
    logger.logData(authorId);
    return authorId;
}

module.exports = {getAuthorById, addNewAuthor};