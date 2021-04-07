document.addEventListener("DOMContentLoaded", () => {
  //grab all the necessary DOM elements

  //form and relevant input fields
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");
  
   //attach event listeners
   newTaskForm.addEventListener("submit", createNewTask);
  
});

const createNewTask = event => {
  event.preventDefault();
  //stop form from trying to submit
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;
  // newTask.appendChild(button)

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  //ul where new tasks will live on the DOM
  const newTaskUl = document.getElementById("tasks");
  const newli = newTaskUl.appendChild(task);
  const button = document.createElement('button')
  button.setAttribute('class', 'delete')
  button.innerHTML = "X"
  button.addEventListener("click", deleteTask);
  newli.appendChild(button)
};


const deleteTask = (event) => {
  event.preventDefault()

  event.target.parentElement.remove()
}