// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(typeof myDate);

let createMyDate = new Date(2024, 11, 3);
console.log(createMyDate);
console.log(createMyDate.toDateString());
let createSecondDate = new Date(2024, 11, 3, 5, 2, 6);
console.log(createSecondDate.toLocaleString());
let createThirdDate = new Date("01-14-2023");
console.log(createThirdDate.toLocaleString());
console.log(createSecondDate.toTimeString());   

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(createThirdDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
console.log(newDate.getMinutes()); 

newDate.toLocaleString('default', {
    weekday: "long"
})
