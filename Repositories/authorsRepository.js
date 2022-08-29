//TODO: addNewAuthor(), getAuthorById()
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

module.exports = {getAuthorById};