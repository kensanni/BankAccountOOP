class bankAccount{
    // inititialize constructor
    constructor(initialAmount){
        this.balance = initialAmount;
    }
    deposit(amount){
        this.balance += amount;
        return this.balance
    }
    withdraw(amount){
        if(this.balance >= amount){
            this.balance -= amount;
            return this.balance;
        }else{
            return   ("Sorry you only have " + this.balance + " in your account");
        }
    }
    checkBalance(){
        return this.balance;
    }
    transfer(amount, account){
        this.withdraw(amount);
        account.deposit(amount);
    }
}

class interestAccount extends bankAccount{
    constructor(initialAmount){
        super(initialAmount);
    }
    deposit(amount){
        this.balance += amount * 1.03;
        return this.balance;
    }
}

class chargingAccount extends bankAccount{
    constructor(initialAmount){
        super(initialAmount);
        this.fee = 3;
    }
    withdraw(amount){
        if(this.balance >= amount + this.fee){
            this.balance -= amount + this.fee;
            return this.balance;
        }else{
            return   ("Sorry you do not have sufficient funds");
        }
    }

}
module.exports.bank = bankAccount;
module.exports.interest = interestAccount;
module.exports.charge = chargingAccount;