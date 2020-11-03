document.addEventListener("DOMContentLoaded", renderData)
  // your code here
  const arr = ["pay bills", "study for exam", "clean bathroom"]
  const taskForm = document.getElementById('create-task-form')

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const formInput = e.target.children[1]
    renderItem(formInput.value)
    formInput.value = ""
  })

  function renderData(){
    for(element in arr){
      renderItem(arr[element])
    }
  }

  function renderItem(item){
    const listUl = document.getElementById('tasks')
    const itemLi = document.createElement('li')
    itemLi.innerHTML = item
    listUl.appendChild(itemLi)
  }