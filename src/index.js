document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault()
  // get the info from the textbox and create a new li 
    const list = document.createElement("li")
    const toDo = document.createTextNode(document.getElementById("new-task-description").value)
    console.log(list.priority)
  // adding and handling 'done' button
    const finished = document.createElement("input")
    finished.value = "Complete" 
    finished.addEventListener("click", function() {
      list.remove()
    })     
  const priority = document.getElementsByName('task-priority')
  for(let i = 0; i < priority.length; i++) {
    if (priority[i].checked) {
      list.classList.add(priority[i].value)
    }
  }
  // add the new task to the tasks ul
    list.appendChild(toDo)
    list.appendChild(finished)
    document.getElementById("tasks").appendChild(list) 
})
});
