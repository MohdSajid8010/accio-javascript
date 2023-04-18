const button = document.getElementsByTagName("button")[0] ;
const div = document.getElementById("test");

// console.log(div.innerText)//

// console.log( div.innerHTML)

// console.log(div.textContent) // removes the empty lines and trims the extra spaces at the end and beginning

// function callme(event) {
//     alert(event.target.innerText)
// }

// button.addEventListener("click", callme);

// array destructuring 
// let arr = [10, 20, 30]

// let [a, ,b] = arr ;
// let a = arr[0] ;
// let b = arr[2] ;

// console.log(a + b)

// Object destructuring 
// let obj = {
//     name : "aravind",
//     age: 22,
//     college: 'abc',
// }

// let college ;
// for(let i in obj){
//     if(i === "college"){
//         college = obj[i]
//     }
// }
// console.log(college)

// let {college: text, name: fullName} = obj
// console.log(text, fullName)

// let name = obj.name
// let age = obj.age
// let college = obj.college

// console.log(name, age, college)


// let arr = [10, 23, 42]
// //       0   1   2

// let obj ={ 
//     a: 10,
//     b: 20,
//     c: 30
// }
// keys = a, b, c 
// values = 10, 20, 30



// for(let i in obj) {
//     console.log(i)
// }

// for(let i of arr){
//     console.log(i)
// }

// for in => itearates on the keys of the data structure
    // for in works on arrays and objects

// for of => iterates on the values of the data structure
    // it only works on arrays


// this keyword and new operator

// this keyword 

// this keyword
/*
1. when we use the this keyword inside a function context.

    this keyword inside a function will point to th reference of the object whichever calls it .

2. when we use the this keyword in the Global execution context. 
    it will be equal to the global object of that javascript environment. (ex: window)

3. When we use this keyword inside a arrow function.

    treat it like a variable 
*/


// let obj = {
//     a: function(){
//         console.log(this.b)
//     },
//     b: {
//         x : 20 ,
//         y : function() {
//             console.log(obj.z);
//         }
//     },
//     z: 400
// }

// obj.b.y();

// let arr = [1, 2,4]
// arr.pop();

// function callme() {
//     console.log(this)
// }
// callme();// obj.func()

// function a(){
//     // this = #4567
//     console.log(this);
// }
// console.log(window)
// alert("Something");

// window.setTimeout(() => {
//     console.log("set timeout")
// }, 2000)
// a();// window.a(); // window = #4567

// console.log(this)

// if(true){
//     console.log(this)
// }

// let obj = { // #400
//     a: 10,
//     b: () => {
//         // this = 
//         console.log(this)
//     }
// }

// obj.b(); // 


// let obj  = { // #954
//     a: 10,
//     b: function(){
//         // this = #954 
//         console.log(this);
//         const arrow = () => {
//             console.log(this)
//         }
//         arrow();
//     }
// }

// obj.b();

// console.log(this) // in th
// let a = () => {
//     console.log(this)
// }
// a(); // window


// constructor functions

// function User(x, y) {
//     this.a = x;
//     this.b = y;
//     console.log("Inside the User constructor function")
// }

// User();

// let user1 = new User(10, 20);
// let user2 = new User(1, 5);

// console.log(user1, user2)

/*
new operator create an empty object at some heap address
*/

/*
To create an instance in other languages we have to create a class/ protottype first

*/


// class College {
//     constructor(a, b, c){
//         // this = #300
//         this.one = a 
//         this.two = b 
//         this.thre = c
//         // #300 = {one: 1, two: 3, three: 10}
//     }
// }
// //             #300 = {} 
// let college1 = new College(1, 3, 10)
// console.log(college1)
// college1 = #300 = {one: 1, two: 3, three: 10}

function evaluate(a, b, c){
    setTimeout(() => {
        let result = a+b;
    }, 3000)
    if(result % 2 === 0){
        c();
    }
}

evaluate(10, 21, () => {
    console.log("hello")
})



