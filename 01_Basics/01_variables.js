const accountID = 1234;
let emailID = "amitsingh95996@gmail.com";
var accountPass = "98765";
acountCity = "Faridabad";
let accountState;

// accountID = 23 // not allowed
// {inside this bracket is called scope, var is not block scope variable}
console.log(accountID);
console.table([accountID, emailID, accountPass, acountCity, accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

