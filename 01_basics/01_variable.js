const accountId=101
let accountEmail="vtrashutosh9123@gmail.com"
var accountPassword ="12345678"
accountCity="Noida"
let accountState

// accountId = 2 // not allowed
accountEmail = "abcd.gamil"
accountPassword="87766554"
accountCity="delhi"
console.log(accountId);
/*
prefer not to use var -> becasuse of issue in block scope and funtion scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
