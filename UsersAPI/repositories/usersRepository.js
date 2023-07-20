const logger = require('../middleware/logger');
const database = require('../database');
const { query } = require('express');

async function getUserLoginData(){

}

async function addNewUser(userData){
    let query = `INSERT INTO Users (Login, Password) VALUES (${userData.login}, ${userData.password})`;

    if(await database.sqlQuery(query)){
        return true;
    }else{
        return false;
    }
}

module.exports = {getUserLoginData, addNewUser};