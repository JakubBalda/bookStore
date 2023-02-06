const assert = require('assert');
const { expect } = require('chai');
const booleanFunctions = require('../utils/booleanFunctions');

describe('booleanFunctions.js tests', ()=>{
    describe('booleanFunctions.isNullOrUndefined() Test', () =>{
        it('should be true(undefined)', () =>{
            let testObject = undefined;
            const result = booleanFunctions.isNullOrUndefined(testObject);
            expect(result).to.be.true;
        });

        it('should be true(null)', () =>{
            let testObject = null;
            const result = booleanFunctions.isNullOrUndefined(testObject);
            expect(result).to.be.true;
        });

        it('should be true', () =>{
            let testObject;
            const result = booleanFunctions.isNullOrUndefined(testObject);
            expect(result).to.be.true;
        });

        it('should be false', () =>{
            let testObject = "null";
            const result = booleanFunctions.isNullOrUndefined(testObject);
            expect(result).to.be.false;
        });
    });
});