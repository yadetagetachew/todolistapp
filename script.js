let todos = [
    {todoText: 'item1', complete: false}, 
    {todoText: 'item2', complete: false}, 
    {todoText: 'item3', complete: false}
  ]
  displayTodos()

function displayTodos(){
   let todosUl = document.getElementById('todos-ul')
   todosUl.innerHTML = ''
   
   for(let i = 0; i < todos.length; i++){
    let todoLi = document.createElement('li')
    if(todos[i].complete === true){
      todoLi.innerText = '[X]' + todos[i].todoText
    }
    else{
      todoLi.innerText = '[]' + todos[i].todoText
    }

    let removeButton = document.createElement('button')
    removeButton.innerText = 'Remove'
    removeButton.addEventListener('click', remove)
    removeButton.id = 'toggle-' + i;

    let toggleButton = document.createElement('button')
    toggleButton.innerText = 'Toggle'
    toggleButton.addEventListener('click', toggle)
    toggleButton.id = 'toggle-' + i;

    let editButton = document.createElement('button')
    editButton.innerText = 'Edit'
    editButton.addEventListener('click', edit)
    editButton.id = 'edit-' + i

    todoLi.appendChild(toggleButton)
    todoLi.appendChild(removeButton)
    todoLi.appendChild(editButton)
    todosUl.appendChild(todoLi)
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

function edit(){
let newTodoText = prompt()
if(newTodoText === null){
  return todoText
}
else if(newTodoText === ""){
  return todoText
}
else{

}
let position = event.target.id.split('-')[1]
todos[position].todoText = newTodoText
displayTodos()
}

function toggle(event){
let position = event.target.id.split('-')[1]

if (todos[position].complete === false){
  todos[position].complete = true
}
else{
  todos[position].complete = false
}
displayTodos()
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