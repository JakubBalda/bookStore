const mysql = require('mysql');
const util = require('util');

let databasePool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bookStore'
})

async function sqlQuery(query){
    const queryExecute = util.promisify(databasePool.query).bind(databasePool);

    data = await queryExecute(query);
    
    return data;
}

module.exports = {sqlQuery};