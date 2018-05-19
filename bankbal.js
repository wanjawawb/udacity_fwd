/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here
    printAccountSummary: function(){
        var info = "Welcome!" + "\n" + 
        "Your balance is currently $" + savingsAccount.balance 
        + " and your interest rate is " + savingsAccount.interestRatePercent + "%.";
        return info;
    }
};

console.log(savingsAccount.printAccountSummary());