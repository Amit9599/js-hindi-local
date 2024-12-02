const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNum = 12345.8937;
console.log(otherNum.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++ Maths +++++++++++++++
console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(15.46));
console.log(Math.ceil(15.46));
console.log(Math.floor(15.56));
console.log(Math.min(8, 5, 7, 3, 6, 4));
console.log(Math.max(6, 5, 9, 3, 2, 4));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);