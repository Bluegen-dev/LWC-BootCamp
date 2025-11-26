console.log("functional programming");

let result = add(2, 3);
console.log(result);

function add(a, b) {
    return a + b;
}

// function expression
const addExp = function (a, b) {
    return a + b;
}

let resultArrow = (a, b) => {
    return a + b;
}

let arrowresult = resultArrow(4, 3);
console.log(arrowresult);

let greet = (name) => {
    return `Hello ${name}`;
}

console.log(greet("John"));

let greetShort = name => `Hello ${name}`;
console.log(greetShort("Jane"));

let welcome = () => "Welcome to the functional programming world!";
console.log(welcome());

// callback function

function processData(data, callback) {
    console.log(`Processing data: ${data}`);
    callback();
}

function greetUser2(){
    console.log("Hello User!");
}

function farewellUser(){
    console.log("Goodbye User!");
}

processData("Sample Data", greetUser2);
processData("Sample Data", farewellUser);
