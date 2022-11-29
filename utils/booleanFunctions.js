const logger = require('../middleware/logger');

function isNullOrUndefined(object){

    return object === undefined || object === null;
}

module.exports = {isNullOrUndefined};