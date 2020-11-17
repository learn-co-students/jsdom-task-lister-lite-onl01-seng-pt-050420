const main = document.querySelector("#main-content")
console.log(main)

// First we need to grab our entire form
const taskForm = document.querySelector("#create-task-form")


const taskList = document.querySelector("#tasks")
    // This is where our tasks will be added to after they're submitted. THIS IS OUR LIST

// Next we need to add an event listener to our form so that something happens when we click submit on our form

taskForm.addEventListener('submit', function(e){
        // Adding a 'Submit' Event Listener to our taskForm

        // Console.log(e.target) <= to make sure its hooked up to the right thing 

        // 'e' is the event
    
    e.preventDefault() 
         // Prevents the form from doing its default behavior. Forms by default send the form, but it has no where to Post so it looks like it's refreshing
    
    // Now we want to add whatever is typed into the field to our list. First we need to grab the data!
       
    const newTask = document.querySelector("#new-task-description").value
         //.value grabs the value (value = "") entered in the text bar for newTask

    // Slap it on the dom
    // where... on "tasks"

    const taskItem = document.createElement("li")
    
    taskItem.innerText = newTask
        // We are telling our taskItem that its inner text is going to match whatever we enter in for newTask

        // Inner Text is the rendered text of a specific node and its descendents
        // Inner HTML is the HTML content of an element => tags like (<h1></h1>, <p></p>, etc)

    // console.log(taskItem) <= Check to make sure its all wired correctly... and it is!

    taskList.appendChild(taskItem)
        // appends a node as the last child of a node. We are appending taskItem to taskList which gets appended to the document
    taskForm.reset()
        // calling .reset() on taskForm resets the task description after submiting a task to our list

    // debugger; // Works like byebug, only hits if the devtools are open
})

taskList.addEventListener("click", function(e){
    // We add this outside of the other function because we have access to taskList globally and if we put it inside taskForm whatever we do here will effect everything inside the form instead of the individual task
    console.log(e.target)
})