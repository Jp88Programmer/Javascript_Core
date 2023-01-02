function BankAccount(custmerName, balance = 0) {
  this.custmerName = custmerName;
  this.accountNumber = Date.now();
  this.balance = balance;

//   this.depocit = (amount) => {
//     this.balance += amount;
//     console.log("depocit sucessfully");
//   };

//   this.withdraw = (amount)=>{
//     if(balance < amount)
//         console.log("unsufficent balance")
//     else
//         this.balance -=balance;
//   }
}

const jpAccount = new BankAccount("jayendra Parmar", 1000);
// jpAccount.depocit(4000);
console.log(jpAccount);
// jpAccount.withdraw(8000);
// console.log(jpAccount);

//prototye 

//define prototype 
BankAccount.prototype.desposit = function(amount){
    this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount){
    if(amount > this.balance)
        console.log("unsufficient balance")
    else
        this.balance -= amount;
}

jpAccount.desposit(4500);
console.log(jpAccount);
jpAccount.withdraw(3500);
console.log(jpAccount);
// console.log(jpAccount.test);
