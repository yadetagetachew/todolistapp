
let todos = [
    // {todoText: 'item1', complete: false}, 
    // {todoText: 'item2', complete: false}, 
    // {todoText: 'item3', complete: false}
  ]
  displayTodos()

function displayTodos(){
   let todosUl = document.getElementById('todos-ul')
   todosUl.innerHTML = ''
   
   for(let i = 0; i < todos.length; i++){
    let todoLi = document.createElement('li')
    if(todos[i].complete === true){
      todoLi.innerHTML =   todoLi.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>' + ' ' + todos[i].todoText
    }
    else{
      todoLi.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>' + ' ' + todos[i].todoText
    }

    let removeButton = document.createElement('button')
    removeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>'
    removeButton.addEventListener('click', remove)
    removeButton.id = 'toggle-' + i;


    let editButton = document.createElement('button')
    // editButton.innerText = 'Edit'
    editButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>'
    editButton.addEventListener('click', edit)
    editButton.id = 'edit-' + i;

    let toggleButton = document.createElement('button')
    // toggleButton.innerText = 'Toggle'
    toggleButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>'
    toggleButton.addEventListener('click', toggle)
    toggleButton.id = 'toggle-' + i;
    

    todoLi.appendChild(toggleButton)
    toggleButton.classList.add("toggleBtn");

    todoLi.appendChild(editButton)
    editButton.classList.add("editBtn");
    todoLi.appendChild(removeButton)
    removeButton.classList.add("removeBtn");
    todosUl.appendChild(todoLi)
    todoLi.classList.add("todos-list")
   }
}


function toggleAll() {
let completedTodos = 0;

for (let i = 0; i < todos.length; i++) {
  if (todos[i].complete === true) {
    completedTodos++;
  }
  if (completedTodos === todos.length) {
    for (let i = 0; i < todos.length; i++) {
      todos[i].complete = false;
    }
  } else {
    for (let i = 0; i < todos.length; i++) {
      todos[i].complete = true;
    }
  }
}
displayTodos();
}

function add(){
  let initialTodoText = addInput.value
  todos.push({todoText: initialTodoText, complete: false})
  addInput.value = ""
  displayTodos()
}

function edit(event){
let newTodoText = prompt()
let position = event.target.id.split('-')[1]
todos[position].todoText = newTodoText
if(newTodoText === null){
  return todoText
}
else if(newTodoText === ""){
  return todoText
}
else{

}

displayTodos()
}
// function toggle(event){
//   let position = event.target.id.split('-')[1]
  
//   if (todos[position].complete === false){
//     todos[position].complete = true
//   }
//   else{
//     todos[position].complete = false
//   }
//   displayTodos()
//   }
function toggle(event) {
  let position = event.target.id.split('-')[1];
  
  // Check if todos[position] exists and has a 'complete' property
  if (todos[position] && todos[position].hasOwnProperty('complete')) {
    todos[position].complete = !todos[position].complete;
  }

  displayTodos();
}

    
function remove(event){
  let position = event.target.id
  todos.splice(position, 1)
  displayTodos()
}

let toggleAllButton = document.getElementById('toggleAll-button')
toggleAllButton.addEventListener('click', toggleAll)

let addButton = document.getElementById('add-button')
let addInput = document.getElementById('add-input')
addButton.addEventListener('click', add)

localStorage.setItem(todoLi);