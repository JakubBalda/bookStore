const xml2js = require('xml2js');
const fs = require('fs');
const parser = new xml2js.Parser({attrkey: "ATTR"});

let xmlString = fs.readFileSync("../data/books.xml", "utf-8");

parser.parseString(xmlString, (error, result) => {
    if(error === null){
        console.log(result);
    }else{
        console.log(error);
    }
})