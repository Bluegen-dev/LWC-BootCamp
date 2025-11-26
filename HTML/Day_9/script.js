// let myCars = ["BMW","AUDI","MERCEDES"];
// console.log(myCars);

// myCars.push("JAGUAR");
// console.log(myCars);

// console.log('test');

// myCars.splice(0,2);
// console.log(myCars);

// const fruits = ['Banana','Orange','Apple','Mango'];
// fruits.splice(2,0,'Lemon','Kiwi');

// console.log(fruits);

// let removedFruits = fruits.splice(0,2);
// console.log(removedFruits);

// console.log(fruits);

// //slice --> extract any portion from array go for the slice method;

// //slice --> param1 start , param2 end + 1

// let sliceArray = fruits.slice(1,3);
// console.log(sliceArray);


let bankingTransaction = [5000, -7000, 9000, -4000, 2000];

bankingTransaction.forEach((curritem,index,array) => {
    curritem = curritem / 10;
})

//console.log('bankingTransaction..',bankingTransaction);

let dividedArray = bankingTransaction.map((curritem) => {
    curritem = curritem / 10;
    return curritem;
})

// console.log('dividedArray...',dividedArray);
// console.log('bankingTransaction...',bankingTransaction);

let depositArray = bankingTransaction.filter((curritem) => curritem > 0);
let withdrawalsArray = bankingTransaction.filter((curritem) => curritem < 0);
// console.log('depositArray',depositArray);
// console.log('withdrawalsArray',withdrawalsArray);

let myFruits = ['fig', 'Apple', 'Guava', 'Cheery'];

let filteredFruits = myFruits.filter((curritem) => curritem.length > 3);
// console.log(filteredFruits);

let entryFor9000 = bankingTransaction.find((curritem) => {
    curritem === 9000;
    return curritem;
});

// console.log(entryFor9000);

// function capitalizedFirstChar(str){
//     console.log('passed string..',str);
// }

const capitalizedFirstChar = (str) => {
   return str.split(' ').map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
        // return word;
   }).join(' ');
}

// let str1 = capitalizedFirstChar('hello world');
// console.log('str1',str1)

const reverseString = (str) => {
    // return str.split('').reverse().join('');
    let result = '';
    for(let i = str.length - 1 ; i >= 0; i--){
        result += str[i];
    }
    return result;
}
// let str1 = reverseString('hello world');
// console.log('str1',str1)

function numberOfOccurences(str){
    let result = {};

    for(let i = 0; i < str.length; i++){
        result[str[i]] = ( result[str[i]] || 0 ) + 1;
    }
    return result;
}

// let str1 = numberOfOccurences('hello world');
// console.log('str1',str1)

function generateUsername(str){
    let result = "";
    if(str.split(' ').length === 3){
        result = str.split(' ').map((word) => {
            return word.charAt(0).toUpperCase();
        }).join('');
    }
    else{
        result = 'incorrectNameFormat';
    }

    return result;
}

// let str1 = generateUsername('ankit Dilipji Jain');
// console.log('str1',str1)

function oddNumbers (array){
    result = [];

    for(let arr of array){
        if(arr % 2 != 0){
            result.push(arr);
        }
    }

    return result;
}

// let oddarray = oddNumbers([1,2,3,4,5,6,7,8]);
// console.log('oddarray',oddarray)

function greaterThanLength5 (array) {

    result = [];

    for(let arr of array){
        if(arr.length >= 5){
            result.push(arr);
        }
    }

    return result;
}

// let newArray = greaterThanLength5(["apple", "banana", "grape", "orange", "kiwi"]);
// console.log('newArray',newArray)


function removeDuplicates ( array ){
    const newset = new Set(array);
    return [...newset];
}

// let newArray = removeDuplicates(["apple", "banana", "grape", "orange", "kiwi", "apple"]);
// console.log('newArray',newArray)

let element = Array.from(document.querySelectorAll("div"));
console.log('element...',element.length);



function clickme(){
    console.log("button clicked");
}

function mousehoverhandler(){
    console.log("mouse over on div");
    let element = document.querySelector(".hover");
    element.style.display = "none";
}

function mouseouthandler(){
    console.log("mouse out executed");
    let element = document.querySelector(".hover");
    element.style.display = "";
}

function handlechange(event){
    console.log(event.target.value);
    console.log(event.target.name);
}