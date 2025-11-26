// // let myDetails = {
// //     name: "John Doe",
// //     age: 30,
// //     city: "New York"
// // };

// // console.log("myDetails object created" , myDetails);
// // console.log(`My name is ${myDetails.name}, I am ${myDetails.age} years old, and I live in ${myDetails.city}.`);

// // console.log(typeof myDetails); // "object"

// // let JsonString = JSON.stringify(myDetails);
// // console.log("JSON String:", JsonString , typeof JsonString); // "string"

// // let parsedDetails = JSON.parse(JsonString);
// // console.log("Parsed Object:", parsedDetails, typeof parsedDetails); // "object"

// // myDetails.Dob = "1990-01-01";
// // console.log("Updated myDetails object:", myDetails);

// // myDetails.age = 31;
// // console.log("Updated age in myDetails object:", myDetails);

// // country = "USA";
// // myDetails["country name"] = country;
// // console.log("Added country to myDetails object:", myDetails);

// console.log("Spread operator example:");

// let numbers = [1, 2, 3];
// let moreNumbers = [4, 5, ...numbers, 6];

// console.log("Original numbers array:", numbers);
// console.log("New array with spread operator:", moreNumbers);

// let myname = "My name is John Doe";

// console.log("myname:", myname);
// console.log("spread myname:", [...myname]);

// let myObj1 = { name: "John", age: 30 };
// let myObj2 = { city: "New York", country: "USA" };

// let combinedObj = { ...myObj1, ...myObj2 };
// console.log("Combined object:", combinedObj);

// let myfavoriteColors = ["red", "green", "blue"];
// let myfavoriteColors2 = myfavoriteColors;

// console.log("Original favorite colors array:", myfavoriteColors);
// console.log("Copied favorite colors array:", myfavoriteColors2);

// myfavoriteColors2.push("yellow");
// console.log("After modifying copied array:", myfavoriteColors);

console.log("Destructuring example:");
let myfavoriteColors = ["red", "green", "blue"];
let [color1, color2, color3] = myfavoriteColors;
console.log("Color 1:", color1);
console.log("Color 2:", color2);
console.log("Color 3:", color3);

color1 = "yellow";
console.log("After modifying color1:", myfavoriteColors);
console.log("Updated Color 1:", color1);

let myDetails = {
    name: "John Doe",
    age: 30,
    city: "New York"
};
console.log("Destructuring object example:");
let { name:FirstName, city } = myDetails;
console.log("Name:", FirstName);
console.log("City:", city);