document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('input[type="submit"]').addEventListener("click", function(event) {
    event.preventDefault();
    textValue = document.getElementById('new-task-description').value;
    const element = document.getElementById('tasks');
    console.log(element);
    console.log(textValue);
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(textValue));
    element.appendChild(li);
  }); 
});
