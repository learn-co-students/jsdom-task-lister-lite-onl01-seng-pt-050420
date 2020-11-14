document.addEventListener("DOMContentLoaded", () => {

  
  // form.addEventListener("submit", function(e){
  //   e.preventDefault()
  //       let toDo = e.target.children[0].value
  const form =  document.getElementById("create-task-form");

  form.addEventListener('submit', function(e){
    e.preventDefault();
      let val = e.target.children[1].value
    
      let li = document.createElement('li')
      li.innerText = val
      let ul = document.getElementById('tasks')
      ul.appendChild(li)

      li.value = ''

  

  })
        
})

