document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let ul = document.getElementById("tasks");
  let listItem = document.createElement("li");
  let form = document.getElementById("create-task-form");

  form.addEventListener("submit", function(event) {
    let input = document.getElementById("new-task-description");
    listItem.innerText = input.value;
    ul.appendChild(listItem);
    event.preventDefault();
  });


});
