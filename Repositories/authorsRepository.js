const mapper = require('../middleware/booksMapper');
const logger = require('../middleware/logger');
const database = require('../database');
const booleanFunctions = require('../utils/booleanFunctions');

function authorExists(authorId){
    return !booleanFunctions.isNullOrUndefined(authorId);
}

function getAuthorById(authorId){
    logger.logInformation('getAuthorById requested');
    let query = `SELECT ID, Name, Surname FROM authors WHERE ID = ${authorId}`;

    let author = database.sqlQuery(query);
    logger.logData(author);
    return author;
}

async function addNewAuthor(author){
    authorId = await findAuthorByName(author);

    if(authorExists(authorId[0])){
        let query = `INSERT INTO authors (name, surname) VALUES ('${author.name}', '${author.surname}')`;

        await database.sqlQuery(query);
        authorId = await findAuthorByName(author);
    }

    return authorId;
}

async function findAuthorByName(author){
    let query = `SELECT ID FROM authors WHERE name = '${author.name}' AND surname = '${author.surname}'`;

    let authorId = await database.sqlQuery(query);
    logger.logData(authorId[0]);
    return authorId;
}

module.exports = {getAuthorById, addNewAuthor, findAuthorByName};