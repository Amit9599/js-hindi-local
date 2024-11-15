// Primitive Datatypes
// 7 - string, number, bigInt, null, undefined, symbol, boolean

let str = "Hello";
let num = 369;
let bigInt = 345345324532456666n;
let Null1 = null;
let Undefined1;
let id1 = Symbol("123");
let id2 = Symbol("123");
let boolea = true;

// Non Primitive datatypes or Reference
// 3 - Array, Object, Function

let arr = ["Amit", "Sumit", "Sachin"];
let obj = {
    num1: 33,
    str1: "Amit",
};

let func = function(){
    console.log("I am a function")
};

console.log(typeof str);
console.log(typeof num);
console.log(typeof bigInt);
console.log(typeof Null1);
console.log(typeof Undefined1);
console.log(id1 == id2);
console.log(typeof id1);
console.log(typeof boolea);
console.log(typeof arr);
console.log(typeof obj);
console.log(typeof func);
func();

// Stack and Heap memory.
// Primitive datatypes store in Stack memory and Non-Primitive datatypes store in Heap memory.
// Stack memory gives copy of memory during access and Heap gives referece of original.