// spread operator (...)
// spread operator can be used with arrays and objects 

// let arr = [1, 3, 5]

// let arr1 = [6, 8]

// arr = [1, 3, 5, 6, 8]
// ... removes the square braces around an array
// arr.push(arr1);
// console.log(arr, arr.length)

// arr = [...arr, ...arr1]
// arr = [1, 3, 5, 6, 8]
// console.log(arr)

// console.log(...arr)
// console.log(...[1,3,5])
// console.log(1, 3, 5)

// arr = [...arr, 10, ...arr1]
// console.log(arr)
// [...[1, 3, 5], 10, ...[6, 8]]
//  [1, 3, 5,10, 6, 8]


// let obj = {
//     name: 'aravind',
//     age: 22,
//     college: 'xyz'
// }

// let obj2 = {college: 'mno',...obj}
// {...{name: 'aravind', age: 22, college: 'xyz'}, college: 'abc'}

// {name: 'aravind', age: 22, college: 'xyz', college: 'abc'}

// {name: 'aravind', age: 22, college: 'abc'}
// console.log(obj2.college)

// spread is used to take a copy of the array or copy of an object
// let arr = [1,2,3] // #454
// let brr = [...arr] ; // #454
// // brr = [...[1,2,3]] = [1,2,3]
// brr[1] = 99;
// console.log(arr, brr)

// let obj = {name: 'aravind', age: 22}
// let obj2 = {...obj} 
// // obj2 = {...{name: 'aravind', age: 22}}
// //obj2 = {name: 'aravind', age: 22}
// obj2.age = 100 ;
// console.log(obj, obj2)

// IIFE (Immediately invoked Function expressions)
// let x = 20 ;


// (function(){
//     console.log(1);
//     return callme;
// })();

// try{
//     console.log(a)
// }
// catch(e){
//     console.log("Error occured")
// }

// let prom = new Promise((resolve, reject) => {
//     setTimeout(reject, 2000);
// })

// setTimeout(() => {
//     console.log("Registering the failure")
//     prom.catch(() => {
//         console.log("Promise failed")
//     })
// }, 3000)

// t= 0s

// setTimeout(() => { // A
//     console.log("callback queue", 3)
// }, 0)
// queueMicrotask(() => {
//     console.log("Microtask queue", 2)
// })

// for(let i = 0; i< 10e9; i++){
  
// }
// t = 10.2s

// for(let i = 1; i <= 3; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 0)
// }

// function callme(x){
//     // let x = 2;
//     setTimeout(() => {
//         console.log(x)
//     }, 0)
// }

// for(let i = 1; i <= 3; i++) {
//     callme(i); // i = 1, i = 2
// }

// callme1 => x = 1, callbaclk
// callme2 => x = 2, callback
// callme3 => x = 3, callback

let arr = [33, 45]
// let result = (arr[1] % 2)
// console.log(result)
arr[1] % 2 === 0 && arr.push(67);
console.log(arr)
// (function(){
//         // arr[1]%2 !== 0 && arr.push(67);
//         console.log("Called it")
// })();
// console.log(arr)
// console.log( (2 %2 ) )
