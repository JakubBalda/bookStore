const logger = require('../middleware/logger');

function validateUser(newUser){
    if(newUser !== undefined){
        if(newUser.login === undefined || newUser.login === '' || newUser.login.length > 30){
            return false; 
        }

        if(newUser.password === undefined || newUser.password === '' || newUser.password.length > 40){
            return false; 
        }

        if(newUser.name === undefined || newUser.name === '' || newUser.name.length > 30){
            return false; 
        }

        if(newUser.role === undefined || newUser.role === '' || newUser.role.length > 20){
            return false; 
        }

        if(newUser.surname === undefined || newUser.surname === '' || newUser.surname.length > 30){
            return false; 
        }

        if(newUser.street === undefined || newUser.street === '' || newUser.street.length > 40){
            return false; 
        }

        if(newUser.houseNumber === undefined || newUser.houseNumber === '' || newUser.houseNumber.length > 3){
            return false; 
        }


        if(newUser.flatNumber === undefined || newUser.flatNumber.length > 3){
            return false; 
        }

        if(newUser.postalCode === undefined || newUser.postalCode === '' || newUser.postalCode.length > 6){
            return false; 
        }

        if(newUser.city === undefined || newUser.city === '' || newUser.city.length > 40){
            return false; 
        }

        if(newUser.mail === undefined || newUser.mail === '' || newUser.mail.length > 50){
            return false; 
        }

        if(newUser.phoneNumber === undefined || newUser.phoneNumber === '' || newUser.phoneNumber.length > 11){
           return false; 
        }
        
        return true;
    }
    return false;
}

module.exports = {validateUser};