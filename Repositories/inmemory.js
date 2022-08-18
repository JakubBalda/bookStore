    const parser = require('../middleware/xmlParser');
    const logger = require('../middleware/logger');
    const mapper = require('../middleware/mapper');
    
    function readBooks(req, res, next){
        let xmlData = parser.parseXml();
        
        return mapper.createBook(xmlData);
        
    }

module.exports = {readBooks};
