let mynumber = 42;
let mynumber2 = 10;

console.log(mynumber > mynumber2); // true
console.log(mynumber < mynumber2); // false

console.log(true && false); // false
console.log(true || false); // true

let mynumber3 = 10;
let mynumber4 = "10";

console.log(mynumber3 == mynumber4); // true (loose equality)
console.log(mynumber3 === mynumber4); // false (strict equality)

console.log(mynumber3 != mynumber4); // false (loose inequality)
console.log(mynumber3 !== mynumber4); // true (strict inequality)

let mystring = "Hello";
let mystring2 = "World";
let mystring3 = "Hello World";
console.log(mystring || mystring2 || mystring3); // "Hello World"


// ternary operator example
let age = 17;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // "Yes, you can vote."