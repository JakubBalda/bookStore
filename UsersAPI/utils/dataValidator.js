const logger = require('../middleware/logger');

function validateUser(newUser){
    if(newUser !== undefined){
        if(newUser.login === undefined){
            return false; 
        }

        if(newUser.password === undefined){
            return false; 
        }

        if(newUser.name === undefined){
            return false; 
        }

        if(newUser.role === undefined){
            return false; 
        }

        if(newUser.surname === undefined){
            return false; 
        }

        if(newUser.street === undefined){
            return false; 
        }

        if(newUser.houseNumber === undefined){
            return false; 
        }


        if(newUser.flatNumber === undefined){
            return false; 
        }

        if(newUser.postalCode === undefined){
            return false; 
        }

        if(newUser.city === undefined){
            return false; 
        }

        if(newUser.mail === undefined){
            return false; 
        }

        if(newUser.phoneNumber === undefined){
           return false; 
        }
        
        return true;
    }
    return false;
}

module.exports = {validateUser};