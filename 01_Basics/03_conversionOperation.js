let score = "Amit";
console.log(typeof score);

let changeInNum = Number(score);
console.log(typeof changeInNum);
console.log(changeInNum);

// "33" => 33
// "33abs" => Nan
// true => 1; false => 0

let isLoggedIn = "sdfsdf";
let convertInBoolean = Boolean(isLoggedIn);
console.log(typeof convertInBoolean);
console.log(convertInBoolean);

// 1 => true; 0 => false
// "" => false; "sdfsd" => true

let someNumber = 12;
let changeInstring = String(someNumber);
console.log(changeInstring);
console.log(typeof changeInstring);

let sValue = 3;
let negativeValue = -sValue;
console.log(negativeValue);

console.log(2+2);
console.log(3-5);
console.log(2*2);
console.log(2**4);
console.log(2/3);
console.log(1345%3);

let str1 = "blue";
let str2 = " berry";
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); // 12
console.log("1" + 2 + "3"); // 123
console.log(1 + 2 + "4"); // 34
console.log(1 + "2" + "5"); // 125
console.log("1" + 2 + 4); // 124
console.log(1 + "2" + 6 + 3); // 1263
console.log(3 + 4 * 5 % 3); //Bodmas 

console.log(+true); // 1
console.log(+false) // 0

console.log(+""); // 0

let gameCounter = 3;
gameCounter--;
console.log(gameCounter);
