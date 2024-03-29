const logger = require('../middleware/logger');
const database = require('../database');
const { query } = require('express');

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

async function getUserLoginDataByLogin(userLogin){
    let query = `SELECT ID, Login, Password, Role FROM Users WHERE Login = '${userLogin}'`;

    return database.sqlQuery(query);
}

async function getAllDetails(userId){
    let query = `SELECT Login, Name, Surname, City, Street, HouseNumber, FlatNumber, Role, Mail, PhoneNumber, Postal FROM Users WHERE ID = '${userId}'`;

    return database.sqlQuery(query);
}

async function updateUserDetails(userData, userId){
    let query = `UPDATE Users SET Login = '${userData.login}', Name = '${userData.name}', 
                    Surname = '${userData.surname}', Street = '${userData.street}', City = '${userData.city}',
                    HouseNumber = '${userData.houseNumber}', FlatNumber = '${userData.flatNumber}', Mail = '${userData.mail}',
                    Postal = '${userData.postalCode}', PhoneNumber = '${userData.phoneNumber}' WHERE ID = ${userId}`;
    
    return database.sqlQuery(query);
}

async function updateUserPassword(userPassword, userId){
    let query = `UPDATE Users SET Password = '${userPassword}' WHERE ID = ${userId}`;

    return await database.sqlQuery(query);
}

async function findUserById(userId, tableName){
    let query = `SELECT ID from ${tableName} WHERE UserID = ${userId}`;

    return await database.sqlQuery(query);
}

async function addFavouriteAuthors(authors, userId){
    let query = `INSERT INTO favourite_authors (UserID, Authors) VALUES (${userId}, '${authors}')`;

    try{
        await database.sqlQuery(query); 
        return 'Added';
    }catch(err){
        return err;
    }
}

async function updateFavouriteAuthors(authors, ID){
    let query = `UPDATE favourite_authors SET Authors = '${authors}' WHERE ID = ${ID}`;

    try{
        await database.sqlQuery(query); 
        return 'Updated';
    }catch(err){
        return err;
    }
}

async function getUserPreferencesByUserId(userId){
    let authorsQuery = `SELECT Authors FROM favourite_authors WHERE UserID = ${userId}`;
    let genresQuery = `SELECT Genres FROM favourite_genres WHERE UserID = ${userId}`;

    try{
        let authors = await database.sqlQuery(authorsQuery); 
        let genres = await database.sqlQuery(genresQuery);

        return [authors[0], genres[0]];
    }catch(err){
        return err;
    }
}

async function addFavouriteGenres(genres, userId){
    let query = `INSERT INTO favourite_genres (UserID, Genres) VALUES (${userId}, '${genres}')`;

    try{
        await database.sqlQuery(query); 
        return 'Added';
    }catch(err){
        return err;
    }
}

async function updateFavouriteGenres(genres, ID){
    let query = `UPDATE favourite_genres SET Genres = '${genres}' WHERE ID = ${ID}`;

    try{
        await database.sqlQuery(query); 
        return 'Updated';
    }catch(err){
        return err;
    }
}

async function getDataToOrder(userId){
    let query = `SELECT Name, Surname, City, Street, HouseNumber, FlatNumber, Postal, Mail, PhoneNumber FROM Users WHERE ID = ${userId}`;

    try{
        return await database.sqlQuery(query);
    }catch(err){
        return err;
    }
}

module.exports = {addNewUser, findUserByMail, findUserByLogin, getUserLoginDataByLogin, 
    getAllDetails, updateUserDetails, updateUserPassword, findUserById, addFavouriteAuthors,
    updateFavouriteAuthors, getUserPreferencesByUserId, addFavouriteGenres, updateFavouriteGenres,
    getDataToOrder};