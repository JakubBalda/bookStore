const mysql = require('mysql');
const util = require('util');

let databaseConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bookStore'
});

let databasePool = mysql.createPool({
    connectionLimit: 50,
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