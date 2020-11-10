document.addEventListener("DOMContentLoaded", () => {
  let tasks = [];
  
  function showToDo(task){
    const list = document.getElementById('tasks');
    const isChecked = task.checked ? 'done': '';
    const node = document.createElement("li");

    node.setAttribute('class', `task ${isChecked}`);
    node.setAttribute('data-key', task.id);
    node.innerHTML = `<input id="${task.id}" type="checkbox"/>
    <label for="${task.id}" class="tick js-tick"></label>
    <span>${task.text}</span> 
    `

    list.append(node)
  }

  function addTask(text) {
    const task = {
      text, checked: false, id: Date.now(),
    };

    tasks.push(task);
    showToDo(task)
}
  
  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', event => {
    // prevent page refresh on form submission
    event.preventDefault();
    const input = document.querySelector('input');

    // format user input
    const text = input.value.trim();
    if (text !== ''){
      addTask(text);
      input.value = '';
      input.focus();
    }
  })

  // const list = document.getElementById('list');
  
  // list.addEventListener('click', event => {
  //   if (event.target.classList.contains('js-tick'))
  // })
});

