const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {

  itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) + 1

  var liE = document.createElement("LI")
  liE.classList.add(classNames['TODO_ITEM'])
  var li = list.appendChild(liE)

  var checkbox = document.createElement("INPUT")
  checkbox.setAttribute("type", "checkbox")
  checkbox.classList.add(classNames['TODO_CHECKBOX'])
  checkbox.onclick = function(){
    if(checkbox.checked === true){
      uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) + 1
    }else{
      uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) - 1
    }
  };

  li.appendChild(checkbox)

  var text = document.createElement("INPUT")
  text.setAttribute("type", "text")
  text.classList.add(classNames['TODO_TEXT'])
  li.appendChild(text)

  var deleteEle = document.createElement("BUTTON")
  deleteEle.classList.add(classNames['TODO_DELETE'])
  deleteEle.innerHTML = "Delete"  
  deleteEle.onclick = function(){
    if(checkbox.checked === true){
      uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) - 1
    }
    itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) - 1
    li.remove()
  };

  li.appendChild(deleteEle)
}