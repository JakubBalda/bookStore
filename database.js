const mysql = require('mysql');

let databaseConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bookStore'
});