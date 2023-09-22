const { response } = require('../app');
const logger = require('../middleware/logger');
const axios = require('axios');

async function storeNewOrder(orderData, orderCart){
    let bookChangeInforamtion = await changeBooksAmount(orderCart);

    return bookChangeInforamtion;
}

async function changeBooksAmount(books){
    let updateInformation = '';
    
    await axios.put('http://localhost:5000/api/books/updateBookAmount', books)
        .then((response) => {

            updateInformation = response.data;
        })
        .catch((error) => {
            logger.logInformation(error);
        })

    return updateInformation;
}

module.exports = {storeNewOrder}