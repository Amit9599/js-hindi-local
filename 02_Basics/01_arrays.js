// Array
const myArr = [1, 2, 3, 4, 5];
const arrHeros = ["Akshay Kumar", "Sharukh Khan", "Ranbir kapoor"];

const myArr2 = new Array(4, 5, 6, 7, 8);

// console.log(myArr[1]);
// console.log(myArr2[2]);

// Array Methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(7)
// myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(0));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);
const mnArr1 = (myArr.slice(1 ,3));

console.log(mnArr1);

console.log("B ", myArr);
const mnArr2 = (myArr.splice(1, 3));

console.log(mnArr2);
console.log("C ", myArr);


