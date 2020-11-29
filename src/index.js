document.addEventListener("DOMContentLoaded", () => {
  haltSubmit()
});

function haltSubmit(){
  document.getElementById('id-submit').addEventListener('click', function(event) {
          document.getElementById("list").innerHTML += "Sorry! <code>preventDefault()</code> won't let you click this!<br>"
          event.preventDefault();
}, false);

}