const logger = require('../middleware/logger');
const database = require('../database');

async function addNewUser(userData){
    let query = `INSERT INTO Users 
                    (Login, Password, Role, Name, Surname, Street, HouseNumber, FlatNumber, Postal, City, Mail, PhoneNumber) 
                        VALUES ('${userData.login}', '${userData.password}', '${userData.role}', '${userData.name}', '${userData.surname}', '${userData.street}',
                            '${userData.houseNumber}', '${userData.flatNumber}', '${userData.postalCode}', '${userData.city}', '${userData.mail}',
                            '${userData.phoneNumber}')`;

    if(await database.sqlQuery(query)){
        return true;
    }else{
        return false;
    }
}

async function findUserByMail(userMail){
    let query = `SELECT ID FROM Users WHERE Mail = '${userMail}'`;

    return database.sqlQuery(query);
}

async function findUserByLogin(userLogin){
    let query = `SELECT ID FROM Users WHERE Login = '${userLogin}'`;

    return database.sqlQuery(query);
}

module.exports = {addNewUser, findUserByMail, findUserByLogin};