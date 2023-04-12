const input = document.getElementById("test")
let button = document.getElementById("btn")



function showInputValue(){
    console.log(input.disabled) // 
    if(input.disabled == true) {
        input.disabled = false ;
    }
    else {
        input.disabled = true ;
    }
}
/*
    disabled: true  (Disabled)

    disabled: false (Enabled)
*/

function toggleInput() {
    let isInputDisabled = input.disabled ;
    if(isInputDisabled){
        // when the input is disabled
        input.disabled = false;
        button.innerText = "Disable the input";
        button.className = "disable"
    }
    else {
        // when the input is enabled
        input.disabled = true;
        button.innerText = "Enable the input";
        button.className = "enable" ;
        input.value = "" ;
    }
}

function printValue() {
    console.log(input.value)
}


/*

    input => 
*/
// HTMLElement
const container = document.getElementById("container") ;
const p = container.children[0] ;

// console.log(container.children)
// console.log(container.hasChildNodes())


// function changeTextInsideThePara() {
//     // code which changes the text if para
//     console.log(p.innerText)
//     p.innerText = "Aravind" ;
//     p.style.color = "red" ;
// }

function deleteChildren(){
    const b = container.children[2] ;
    container.removeChild(b)
}

function addElement() {
    const newElement = document.createElement("h1");
    newElement.innerText = "Dynamic element" ;
    container.append(newElement) ;
}

function insertElementIntheMiddle() {
    let removedElements = [] 
    for(let i = 0 ; i < 2 ; i++) {
        let lastElement = container.lastElementChild ;
        container.removeChild(lastElement);
        removedElements.push(lastElement);
    }
    let h1 = document.createElement("h1");
    h1.innerText = "Inserted Text" ;
    container.append(h1);
    while(removedElements.length != 0){
        container.append(removedElements.pop())
    }
}
/*

    arr = ["p", "s", "b"]

    "h1"


     removedElements = []

     pop() => "b", 
     removedElements = ["b"]
     arr = ["p", "s"]

     pop() => "s"
     removedElements = ["b", "s"]
     arr = ["p"]

     append("h1") 
     arr = ["p", "h1"]

    append("s")
    arr = ["p" , "h1", "s"]
    removedElements = ["b"]

    append("b")
    arr = ["p", "h1", "s", "b"]
    removedElements = []
*/