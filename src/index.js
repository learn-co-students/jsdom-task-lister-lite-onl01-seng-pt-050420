document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('input[type="submit"]').addEventListener("click", function(event) {
    let list = document.getElementById("tasks")
    let taskDescription = document.getElementById("new-task-description").value
    let task = document.createElement('li')
    task.innerText = taskDescription
    list.appendChild(task)

    event.preventDefault()
  })
});
