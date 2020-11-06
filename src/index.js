
document.addEventListener("DOMContentLoaded", () => {

const ul = document.getElementById("tasks");
const listItem = document.createElement("li")
const form = document.getElementById("create-task-form")

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    let input = document.getElementById('new-task-description');
    listItem.innerText = input.value
    ul.appendChild(listItem)
     e.target.reset()
  })



});


