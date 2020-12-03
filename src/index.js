

  const form = document.getElementById('create-task-form') 
  
  form.addEventListener('submit', e => { 
    e.preventDefault()

      const inputValue = document.getElementById('new-task-description').value
      //console.log(inputValue) 

      const newLi = document.createElement('li') 
      newLi.innerText = inputValue 

      const ulTag = document.getElementById('tasks') 
      ulTag.appendChild(newLi)   
       
   }) 



    
    

  
