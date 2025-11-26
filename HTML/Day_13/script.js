// let catImageUrl = '';
// async function loadRandomUsers(){
//     let response = await fetch('https://api.thecatapi.com/v1/images/search');
//     let data = await response.json();
//     // catImageUrl = data[0].url;
//     console.log(data);
//     const imageUrl = data[0].url;
//     let element = document.querySelector(".catimage");
//     element.src = imageUrl;
// }

// loadRandomUsers();

// async function loadExchangeRate(){
//     let response = await fetch("https://rest.coinapi.io/v1/exchangerate/BTC/USD" , {
//         method: "GET",
//         headers: {
//             "X-CoinAPI-Key" : "1762f09f-f344-470f-adde-1bbd2825a172",
//         },
//     });

//     let data = await response.json();
//     console.log('data..',data);
// }

// loadExchangeRate();

// function calculateSum(arr){
//     debugger;
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// let array = [10,20,30,40];
// console.log(calculateSum(array));

// const x = 10;
// if((x == 5)){
//     console.log('5');
// }
// else{
//     console.log('10');
// }

// function resolveTimeout(value,delay){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value);
//         },delay);
//     });
// }

// function rejectTimeout(value,delay){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             reject(value);
//         },delay);
//     });
// }

// let promise1 = resolveTimeout('Welcome to promise 1' , 2000);
// let promise2 = resolveTimeout('reject to promise 2' , 3000);

// const promiseAll = Promise.all([promise1,promise2]);

// console.log(promiseAll);

console.log('Welcome');