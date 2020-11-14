document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form");
  let input = document.getElementById("new-task-description");
  let taskList = document.getElementById("tasks");
  
  
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    if(input.value !== "") {
      let task = document.createElement("LI");
      task.innerText = input.value;
      taskList.appendChild(task);
      input.value = "";
    }
  });
});
