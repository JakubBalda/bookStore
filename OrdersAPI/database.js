const { error } = require('console');
const util = require('util');
const dbConfig = require('./databaseConfig'); // samo databaseConfig w nawiasie nie działa

async function sqlQuery(query){
    const queryExecute = util.promisify(dbConfig.databasePool.query).bind(dbConfig.databasePool);

    data = await queryExecute(query);
    
    return data;
}

async function sqlQueries(queries){
    const queryExecute = util.promisify(dbConfig.databasePool.query).bind(dbConfig.databasePool);

    try{
        const results = await Promise.all(queries.map(query => queryExecute(query)));

        return results;
    }catch (error) {
    throw error;
  }
}

module.exports = {sqlQuery, sqlQueries};