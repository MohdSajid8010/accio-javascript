
/*1

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        setTimeout(() => {
            console.log("4")
        }, 0)
        const variable = () => { console.log("some message")}
        resolve(variable); // 
    }, 2000) // 
})

console.log(promise1, "1") // 1

setTimeout(() => {
    console.log(promise1, "2") // fullfilled 2
}, 2000)

function fullfilledListener(data){
    data()
    console.log("After promise gets fullfilled", "3") // 3
}

function rejectedListener(data){
    console.log(data , "Inside the rejected listener")
}

promise1.then(fullfilledListener)

promise1.catch(rejectedListener)

promise1.finally(() => {
    console.log("Called")
})
// pending => fullfilled
// pending => rejected


// Inside the executor as soon as resolve is invoked
//   i. the state of the promise changes fullfilled
//  ii. corresponding listener (fullfilledListener) will be pushed into microtask queue.
// iii. The finally listener will be also pushed into microtask queue

// Inside the executor as soon as reject is invoked
//   i. the state of the promise changes to rejected
//  ii. corresponding listener (rejectedListener) will be pushed into microtask queue.
// iii. The finally listener will be also pushed into microtask queue

*/


// promise chaining

/*
let arr = [1, 2, 3]

let result2 = arr.map((e) => {
    return 2*e ;
}).map((e) => {
    return 3*e ;
})
// result2 = [6, 12, 18]

console.log(result2);
*/
/*
class Test {
    constructor(a, b) {
        this.sum = a+b;
    }
    method(newNumber){
        // this = #400
        this.sum += newNumber;
        return this;// return #400 ;
    }
}

const t = new Test(10, 20); // t = #400
console.log(t) // Test {sum: 30 }
t.method(90).method(40);
console.log(t)

*/
// then(callback){
//     // some code 
//  // this = #500
//     return this;
// }

let prom = new Promise((resolve, reject) => { // #500
    setTimeout(() => {
        resolve({data: 'resolved'})
    }, 1000)
})
const cb1 = () => {console.log("resolved")}
const cb2 = () => {console.log("rejected")}
const cb3 = () => {console.log("finally")}
prom.then(cb1).catch(cb2).finally(cb3)
// prom.then(cb1)
// prom.catch(cb2)
// prom.finally(cb3)

// let value = prom.then((response) => {console.log(response)})
// console.log(value, prom); // #500 === #500
// inside the then , catch, finally => return this;
// setTimeout(() => {
//     console.log(value, prom)
//     // prom => rejected
//     // value => rejected
// }, 2000)

// value promise maintains the state of the fullfilledListener
// if fullFilledListener is called value promsie state will updated to fullfilled.

// 
// prom(#500).then() => #104
// #104 is in respect to the then method status
