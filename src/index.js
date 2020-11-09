document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector('create-task-form');

  taskForm.addEventListener('submit', function(event){
    event.preventDefault();

    let inputTag = document.querySelector('input#new-task-description');
    let inputValue = inputTag.value;

    let newLi = document.createElement('li');
    newLi.innerText = inputValue;

    let ulTag = document.querySelector('ul#tasks');
    ulTag.append(newLi);
    inputTag.value = '';
  })
});
