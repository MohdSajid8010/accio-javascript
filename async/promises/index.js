
/*
let users = ["payel", "parasi", "radha", "dipankar", "aravind"];

let genderMapping = {
    payel: "Female",
    dipankar: 'Male',
    parasi: "Female",
    aravind: "Male",
    radha: "Female"
}

function searchUsers(searchString, callback){
    // searchString = "a"
    // this = window
    setTimeout(() => {
        const searchResults = users.filter((element) => {
            return element.includes(searchString);
        })

        let x = 20 ;
        //  the task of below function is to take list of genders and then render them insidethe genders section.
        function renderGenders(arr){
            
            const ul = document.getElementById("genders");
            ul.innerHTML = '';
            for(let i = 0 ; i < arr.length; i++) {
                const li = document.createElement("li");
                li.innerText = arr[i];
                ul.appendChild(li);
            }
        }

        // call the renderGenders function(second argument) after loading the gender of each user
        callback(searchResults, renderGenders)
    }, 2000)
}

const searchInput = document.getElementById("search");

searchInput.addEventListener("change", (e) => {
    function renderElements(arr, renderGenders){
        // arr = ["aravind", "naresh"]
        const ul = document.getElementById("users");
        ul.innerHTML = ''; 
        for(let i = 0 ; i < arr.length; i++) {
            const li = document.createElement("li");
            li.innerText = arr[i];
            ul.appendChild(li);
        }

        setTimeout(() => {
            // ["aravind", "radha"]
            const genders = arr.map((name) => {
                return genderMapping[name]
            })
            // render genders inside genders section
            renderGenders(genders);
        }, 3000);

    }
    // task of above function is to take list of names and render names and their genders
    
    searchUsers(e.target.value , renderElements)
    // task above is to load data for the specified string(first argument) and after loading call the callback(second argument)
})
*/


// loading names => 2s
// renderElements(searchResults) => to render all the names inside the names section
// load the genders => 3s
// renderGenders(gendersList) => to render all the genders inside the Genders section.


// function loadNames(searchString, renderElement){
//     // after loading
//     renderElements(searchResults, loadGenders){
//         renderNames();
//         loadGenders(genders, rendergenders){
//             renderGenders();
//         }
//     }
// }


// whats is a constructor function ?
// the function which is invoked with new operator

/*
class Promise {
     constructor(executor){
          executor(this.resolve, this.reject) ;
     }

     resolve(){}

     reject(){}

     then(callback){}
 }
 */

 /*
    -> Promise constructor takes a function(executor)
    -> executor will be called inside the constructor of Promise class.
    -> for executor method the constructor gives two other methods in the form arguments
    -> whenever resolve gets called the promise's state will change from pending to fullfilled
    -> whenever reject gets called the promise's state will change from pending to rejected.
    -> Once the promise state is changed from [pending to fullfilled] or [pending => rejected] it can't be mutated again.
 
 
 */

// function executor(resolve, reject){
//     // resolve = function 
//     // reject = function 
//     setTimeout(() => { // t = 0s (1000ms + 0ms = 1000ms)
//         resolve() // fullfilled
//         reject(); // fullfilled => rejected
//     }, 1000)
//     console.log(typeof resolve, typeof reject) // t = 0.1ms
//     console.log("Inside executor") // t = 0.2ms
// }

// console.log("1");
// const promise = new Promise(executor) ; // t = 0.3ms
// console.log("2") // t = 0.4ms

// console.log(promise) // pending t = 0.4ms
// setTimeout(() => { // t = 0.5ms ( t = 100 + 0.5ms = 100.5ms)
//     console.log(promise) // pending
// }, 100) // 

// setTimeout(() => { // t = 0.6ms (2000ms + 0.6ms = 2000.6ms)
//     // status = fullfilled
//     console.log(promise) // fullfilled
// }, 2000)


// every promise object will have two states
// pending state, fullfilled

// whenever the promise gets fullfilled it needs to execute a function 


/*
class Prom {
    constructor(executor){
        executor(10, () => {})
    }
}
function callback(one, two){
  console.log(typeof one, typeof two)
}
let promise = new Prom(callback)
*/




let promise = new Promise((resolve, reject) => {
    console.log("1")
    setTimeout(() => {
        console.log("2")
        resolve({name: "aravind"});
        console.log("3")
    }, 1000)
    console.log("4")
})
// 1, 4, 6, 2, 3

// when ever the promise gets resolved i wanted to call a function
function afterResolve(){
    console.log("5");
}

promise.then(afterResolve)

promise.catch(() => {})

console.log("6")