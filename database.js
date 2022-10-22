const util = require('util');
const dbConfig = require('../bookStore/databaseConfig'); // samo databaseConfig w nawiasie nie działa

async function sqlQuery(query){
    const queryExecute = util.promisify(dbConfig.databasePool.query).bind(dbConfig.databasePool);

    data = await queryExecute(query);
    
    return data;
}

module.exports = {sqlQuery};