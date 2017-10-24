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
    describe('deposit and checkBalance works', ()=>{
        it('for super class', ()=>{
            chai(account1.deposit(500)).equal(account1.checkBalance());
        });
        it('for interestAccount class', ()=>{
            chai(account2.deposit(800)).equal(account2.checkBalance());
        });
        it('for chargingAccount class', ()=>{
            chai(account3.deposit(900)).equal(account3.checkBalance());
        });
    }); 
    describe('withdraw method works', ()=>{
        it('for super class', ()=>{
            chai(account1.withdraw(367)).equal(account1.checkBalance());
        });
        it('for interestAccount class', ()=>{
            chai(account2.withdraw(645)).equal(account2.checkBalance());
        });
        it('for chargingAccount class', ()=>{
            chai(account3.withdraw(911)).equal(account3.checkBalance());
        });
    });
    describe('withdraw method works when amount is > balance', ()=>{
        it('for super class', ()=>{
            chai(account1.withdraw(36700)).equal('Sorry you only have ' + account1.checkBalance()+ ' in your account');
        });
        it('for interestAccount class', ()=>{
            chai(account2.withdraw(64500)).equal('Sorry you only have ' + account2.checkBalance()+ ' in your account');
        });
        it('for chargingAccount class', ()=>{
            chai(account3.withdraw(91100)).equal('Sorry you do not have sufficient funds');
        });
    })     

})
