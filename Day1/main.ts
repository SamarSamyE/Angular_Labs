class Account{
    constructor(public accNo=0,public balance=0){
    }
    debitAmount(){
        throw new Error("Method not implemented.");
    }
    creditAmount(){
        throw new Error("Method not implemented.");
    }
    get Balance(){
        return this.balance;
    }
}

interface IAccount{
    DateOfOpening: string;
    addCustomer();
    removeCustomer();
}   

class currentAccount extends Account implements IAccount {
    constructor(accNo=0, balance=0, public interestRate=0){
        super(accNo, balance);
    }
    DateOfOpening:"12/4/2023";

    addCustomer(){
        throw new Error("Method not implemented.");
    }
    removeCustomer(){
        throw new Error("Method not implemented.");
    }
}

class savingAccount extends Account implements IAccount{
    constructor(accNo=0, balance=0, public minBalance=0){
        super(accNo, balance);
    }
    DateOfOpening:"12/4/2023";

    addCustomer(){
        throw new Error("Method not implemented.");
    }
    removeCustomer(){
        throw new Error("Method not implemented.");
    }
}