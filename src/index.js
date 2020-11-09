function addToDo(e) {
  e.preventDefault();
  const toDoDescription = document.getElementById("new-task-description");
  if (toDoDescription.value) {
    const toDo = document.createElement("li");
    toDo.innerText = toDoDescription.value;
    let toDos = document.getElementById("tasks")
  
    toDos.appendChild(toDo)
  }
  e.target.reset(); 
}

function removeToDo(e) {
  
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", addToDo);
});
