const mysql = require('mysql');
const util = require('util');

let databaseConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bookStore'
});

async function sqlQuery(query){
    
    databaseConnection.connect((err) => {
        if(err) throw err;  
        console.log("Connected successfuly!");
    });

    let data;
    
    const queryExecute = util.promisify(databaseConnection.query).bind(databaseConnection);

    data = await queryExecute(query);

    databaseConnection.end();
    return data;
}

module.exports = {sqlQuery};