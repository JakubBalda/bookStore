const logger = require('../middleware/logger');
const usersRepository = require('../repositories/usersRepository');
const bcrypt = require('bcrypt');

async function encryptPassword(newPassword, userId){
    bcrypt.hash(newPassword.newPassword, 10,  (err, hash) => {
        newPassword = hash;

        console.log(hash);
        
        if(hash !== undefined && usersRepository.updateUserPassword(newPassword, userId)){
            return true;
        }
        return false;
    });
}

module.exports = {encryptPassword};