const name = "Amit ";
const repoCount = 50;
console.log(name + repoCount + " Value");
console.log(`Hi my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Amitt-th");
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__); 
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
console.log(gameName.toUpperCase());

console.log(gameName.substring(0, 7));
console.log(gameName.slice(-5, 4));

const newStringOne = "     Amit    ";
console.log(newStringOne);
console.log(newStringOne.length);
const newStringTwo = (newStringOne.trim());
console.log(newStringTwo);
console.log(newStringTwo.length);

const url = "https://amit.singh%22";
console.log(url.replace(".singh%", "-love"));
console.log(url.includes("https://"));

console.log(gameName.split("t"));
