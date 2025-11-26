console.log("Bootcamp JavaScript loaded");
console.log("This is a test message from bootcamp.js");
console.error("This is an error message from bootcamp.js");
console.warn("This is a warning message from bootcamp.js");

let myname = "John Doe";
console.log(`Hello, ${myname}! Welcome to the Bootcamp.`);

myname = "Jane Smith";
console.log(`Hello, ${myname}! Welcome to the Bootcamp.`);

const myAge = 25;
console.log(`I am ${myAge} years old.`);

let myobject = {
    name: "John Doe",
    age: 30,
    city: "New York"};

console.log(`My name is ${myobject.name}, I am ${myobject.age} years old, and I live in ${myobject.city}.`);

var myscore = 100;
console.log(`My score is ${myscore}.`);

var myscore = 95;
console.log(`My updated score is ${myscore}.`);
console.log('Global scope',window.myscore);