document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("submit-button").addEventListener("click", function(event) {
    let input = document.getElementById("new-task-description").value;
    let ul = document.getElementById("tasks");
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);
    event.preventDefault();

  }, false);

});
