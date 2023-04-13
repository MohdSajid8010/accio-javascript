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