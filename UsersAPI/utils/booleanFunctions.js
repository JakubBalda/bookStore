const logger = require('../middleware/logger');

function isNullOrUndefined(object){

    return object === undefined || object === null;
}

function notEquals(userId, userIdFromDb){

    return userId != userIdFromDb;
}

module.exports = {isNullOrUndefined, notEquals};