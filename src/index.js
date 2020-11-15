document.addEventListener("DOMContentLoaded", () => {

  let form = document.getElementById('create-task-form');

  let list = document.getElementById('list');

  function addTaskToList(task){
    let li = document.createElement('li');
    let taskValue = form.elements['new-task-description'].value;
    let node = document.createTextNode(taskValue);
    li.appendChild(node);
    list.appendChild(li);
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    addTaskToList();
  });
});
