const mapper = require('../middleware/booksMapper');
const logger = require('../middleware/logger');
const database = require('../database');

function getAuthorById(authorId){
    logger.logInformation('getAuthorById requested');
    let query = `SELECT ID, Name, Surname FROM authors WHERE ID = ${authorId}`;

    let author = database.sqlQuery(query);
    logger.logData(author);
    return author;
}

async function addNewAuthor(authorName, authorSurname){
    authorId = await findAuthor(authorName, authorSurname);

    if(authorId[0] === undefined){
        let query = `INSERT INTO authors (name, surname) VALUES ('${authorName}', '${authorSurname}')`;

        await database.sqlQuery(query);
        authorId = await findAuthor(authorName, authorSurname);
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