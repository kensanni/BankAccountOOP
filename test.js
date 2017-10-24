import app from "./src/app.js";
import Chai from 'chai';

const chai = Chai.expect;
let account1;
let account2;
let account3;

describe("Bank Account class", () => {
    beforeEach(()=>{
            account1 =  new app.bank(1000);
            account2 =  new app.interest(2000);
            account3 =  new app.charge(3000);
    });
    describe('constructor works', ()=>{
       
        it('for super class', ()=>{
            chai(account1).eql( { balance: 1000 });
        });
        it('for interestAccount class', ()=>{
            chai(account2).eql( { balance: 2000 });
        });
        it('for chargingAccount class', ()=>{
            chai(account3).eql( { balance: 3000, fee: 3});
        });
    });
})
