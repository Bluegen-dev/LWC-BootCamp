console.log("Day 8 - JavaScript Code Snippet");

let mystring = "Hello, World!";
console.log(mystring);
console.log(mystring.length);

//Extracting a substring

let text = "Apple, Banana, Cherry";

let part = text.slice(7, 13);
console.log(part); // Output: Banana

let part2 = text.slice(-6);
console.log(part2); // Output: Cherry

let part3 = text.substr(7, 6);
console.log(part3); // Output: Banana, Cherry

// replace method

let newText = text.replace("Banana", "Orange");
console.log(newText); // Output: Apple, Orange, Cherry

// Converting to uppercase and lowercase

let upperText = text.toUpperCase();
console.log(upperText); // Output: APPLE, BANANA, CHERRY

// concatenation
let text1 = "Hello";
let text2 = "World";

let combinedText = text1 + " " + text2;
console.log(combinedText); // Output: Hello World

let combinedText2 = `${text1} ${text2}`;
console.log(combinedText2); // Output: Hello World

let combinedText3 = text1.concat(" ", text2);
console.log(combinedText3); // Output: Hello World

//trim method
let spacedText = "   Hello World!   ";
let trimmedText = spacedText.trim();
console.log(trimmedText); // Output: Hello World!
console.log(spacedText); // Output:    Hello World!

//split

let mycsvdetails = "Ankit,Nidhi,Kiyaan,Laksh";

let mycsvarray = mycsvdetails.split(',');

console.log("mycsvarray",mycsvarray);

let mytostring = mycsvarray.toString();

console.log("mytostring",mytostring);

let joinstring = mycsvarray.join('*');

console.log("joinstring",joinstring);

console.log("--------------------------------",text);

console.log(text.indexOf("Banana"));
console.log(text.indexOf("Mango"));

console.log(text.startsWith("Apple"));

mycsvarray.map(curritem => {
    console.log("Current Item..",curritem);
})










