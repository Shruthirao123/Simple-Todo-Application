let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [
  {
    text: "Learn HTML",
    uniqueId: 1
  },
  {
    text: "Learn CSS",
    uniqueId: 2
  },
  {
    text: "Learn JavaScript",
    uniqueId: 3
  }
];

let addTodoBut=document.getElementById("addTodoBut");
 
function onAddTodo(){
    let value1=document.getElementById('todoUserInput');
    let userInput=value1.value;
    if (userInput===""){
        alert('enter valid input');
        return;
    }
    let count=todoList.length;
    let obj={
        text:userInput,
        uniqueId:count+1 
    }; 
    createAndAppendTodo(obj);
    value1.value="";
} 
 
addTodoBut.onclick=function(){
     onAddTodo();
}

function clickTheFunction(checkboxId, labelId) {
    let id1 = document.getElementById(checkboxId);
    let lId2 = document.getElementById(labelId);
    if (id1.checked === true) {
        lId2.classList.add("checked");
    } else {
        lId2.classList.remove("checked");
    }
}

function theDeleteIcon(todoId){
    let m=document.getElementById(todoId);
    todoItemsContainer.removeChild(m);
}

function createAndAppendTodo(todo) {
    let checkboxId = 'checkbox' + todo.uniqueId;  
    let labelId = 'label' + todo.uniqueId;
    let todoId='todo'+todo.uniqueId;
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id=todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.onclick = function() {
        clickTheFunction(checkboxId, labelId);
    }
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId; // Ensure the label has the correct ID
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick=function(){
        theDeleteIcon(todoId);
    }
    deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}