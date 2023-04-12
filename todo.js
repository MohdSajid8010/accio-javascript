const container = document.getElementById("container") ;
const todoItemInput = container.children[0] ;
const timeInput = container.children[1] ;
const todoContainer = document.getElementById("todos-container") ;
/*
    made
    <div class="todo-item">
        <b>Do coding</b>
        <span>10:36AM</span>
    </div>
    
    final
    <div class="todo-item">
        <b>Do coding</b>
        <span>10:36AM</span>
    </div>
    
    div = #400
    b = #500
    span = #900
*/
function unshift(element){
    const removedElements = [] ;
    while(todoContainer.children.length != 0){
        const lastElement = todoContainer.lastElementChild
        removedElements.push(lastElement);
        todoContainer.removeChild(lastElement);
    }
    console.log(removedElements)
    todoContainer.appendChild(element);
    while(removedElements.length != 0) {
        todoContainer.appendChild(removedElements.pop());
    }
}

function addTodo() {
   let todoText = todoItemInput.value.trim() ;
   let time = timeInput.value ;
   let div = document.createElement("div");
   div.className = "todo-item"
   let b = document.createElement("b");
   let span = document.createElement("span");
   b.innerText = todoText ;
   span.innerText = time ;
   if( todoText && time) {
    div.appendChild(b);
    div.appendChild(span);
    unshift(div);
   }
   else {
    // error Element 
    // append wherever you want
   }
}