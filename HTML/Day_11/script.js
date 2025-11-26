// console.log('Day_11');

// const myEvent = new CustomEvent("myevent", {
//     detail : {},
//     bubbles: true,
//     cancelable: true,
//     composed: false
// });
// document.querySelector("#element").dispatchEvent(myEvent);


// function handleonchange(event){
//     console.log(event.target.value);
//     let value = event.target.value;
//     if(value == 10){
//         const myevent = new CustomEvent("valueten", {
//             detail : {
//                 message : "User have entered value 10",
//             },
//         });
//         document.dispatchEvent(myevent);
//     }
// }

// // whenever user enter value 10 fire custom event

// document.addEventListener("valueten" , (event) => {
//     console.log(event.detail.message);
// });

// setTimeout(() => {
//     console.log('Timeout done');
// },5000);

// let intervalDetails = "";

// intervalDetails = setInterval(()=>{
//     console.log("timeinterval");
// },1000);

// setTimeout(() => {
//  clearInterval(intervalDetails);
// },5000);

// import * as lwcbootcamp from "./utils.js";
// import doMul from "./utils.js";

// console.log(lwcbootcamp.weekdays);
// console.log(lwcbootcamp.DATE_OF_BIRTH_YEAR);
// lwcbootcamp.sayHi('Welcome to lear JS');

// doMul(2,6);

function generatePromise(messgage){
    return new Promise((resolve,reject) => {
        if(!messgage){
            reject('Message is empty');
        }else{
            setTimeout(() => {
                console.log(messgage);
                resolve();
            },1000);
        }
        
    });
}

// generatePromise('FirstCall')
// .then(() => {
//     console.log('Promised Resolved');
//     generatePromise('SecondCall')
// .then(() => {
//         console.log("SecondPromiseResolved");
//         generatePromise()
// .then(() => {
//     console.log('1111');
// })
// .catch((error) => {
//     console.log('error',error);
// });
//     });
// });

// async function generateDifferentPromises (){
//     try{
//         await generatePromise('1st Call');
//         await generatePromise('2nd Call');
//         await generatePromise('3rd Call');
//         await generatePromise('');
//     }
//     catch(error){
//         console.log('catch of async',error);
//     }
// }

// generateDifferentPromises();

function resolvedTimeout(value,delay){
    return new Promise((resolve) => setTimeout(() => resolve(value),delay));
}

function rejectTimeout(value,delay){
    return new Promise((resolve, reject) => setTimeout(() => reject(value),delay));
}

async function load(){
    let promise1 = resolvedTimeout('Welcome',5000);
    let promise2 = rejectTimeout('Loading Failed',3000);
    let promise3 = resolvedTimeout('Welcome 2',5000);
    const allPromise = Promise.race([promise1,promise2,promise3]);

    try{
        const lists = await allPromise;
        console.log('lists',lists);
    }
    catch(error){
        console.log(error);
    }
}

load();