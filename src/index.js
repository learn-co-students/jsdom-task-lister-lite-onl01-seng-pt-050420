document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault()
  // get the info from the textbox and create a new li 
    const list = document.createElement("li")
    const toDo = document.createTextNode(document.getElementById("new-task-description").value)
  // adding and handling 'done' button
    const finished = document.createElement("input")
    finished.value = "Complete" 
    finished.type = "submit"
    finished.addEventListener("click", function(e) {
      list.remove()
    })     
  // const priority = document.getElementsByName('task-priority')

  // add the new task to the tasks ul
    list.appendChild(toDo)
    list.appendChild(finished)
    document.getElementById("tasks").appendChild(list) 
})
});
