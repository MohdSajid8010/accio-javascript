const button = document.getElementById("btn");


button.className = "something" ;
button.style.color = "red" ;
// HTMLElement 
let func = function(){
    console.log("Some message")
}
/*
combinators: 
    space (descendent)
    > (child selector)
    # (id selector)
    . (class selector)
    + (immediate next sibling)
    ~ (all next sblings)
*/

button.addEventListener("dblclick" , func)


/***
 * getElementById("id_of_the_element")
 * getElementsByTagName("img"), list of references of the HTML elements.
 * getElementsByClassName("class_name"), list a of references of HTML elements whose classname is the one we passed
 * querySelector("div > img + button")
 * querySelector("div"), returns the first encountered elements
 * querySelectorAll(div > img + button)
 *  */

const buttonsList = document.querySelectorAll(".grid-container button") ; // buttonsList is an array of HTML buttons
const outputContainer = document.getElementById("input");
const clearButton = document.getElementById("clear");

// register function for all the button clicks
for(let i = 0 ; i < buttonsList.length; i++) {
    buttonsList[i].addEventListener("click", onButtonClick);
}

function onClear(){
    outputContainer.value ="" ;
}

clearButton.addEventListener("click", onClear);

function onButtonClick(event) {
    let target = event.target;
    let currentValue = target.innerText ; 
    let enteredValue = outputContainer.value ;

    const operators = ["+", "-", "*", "/"] ;
    let lastKey = enteredValue[enteredValue.length - 1];

    if(operators.includes(lastKey) && operators.includes(currentValue)){
         let newExp = enteredValue.slice(0, enteredValue.length - 1) + currentValue;
        outputContainer.value = newExp;
    }
    else if(currentValue === "=" && enteredValue === ""){
        alert("Enter some data")
        return ;
    }
    else if(currentValue === "="){
        const result = eval(enteredValue);
        outputContainer.value = result ;
    }
    else{
        outputContainer.value = outputContainer.value + currentValue ;
    }
}

// ODMAS

// 1 + 3 - 5 * 6 = 
// ["1" , "+", "3", "-", "5", "*", "6"]

// ["1", "+", "3", "-" , 30 ]

// [4, "-", "30"]

// [-26]


// have 2 or more operators together 

// 2 +- 4 => invalid


// int 31bit
// 33bits

document.body.addEventListener("keyup", (e) => {
    console.log(e)
})
    // Number  +,-,*,/      Number
// number1 (operator) number2

