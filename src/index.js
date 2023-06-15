document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const taskForm = document.querySelector('form');



  function handleTask(e) {
    e.preventDefault();
    createTask(e.target["new-task-description"].value);
    taskForm.reset();
  }

  function choosePriority() {
    const select = document.createElement('select')
    const default1 = document.createElement('option')
    const option1 = document.createElement('option')
    const option2 =document.createElement('option')
    const option3 =document.createElement('option')
    default1.textContent = "Priority"
    default1.value = "Priority"
    option1.textContent = "High"
    option1.value = "High"
    option2.textContent= "Medium"
    option2.value = "Medium"
    option3.textContent= "Low"
    option3.value = "Low"
    document.querySelector("#create-task-form").appendChild(select)
    select.appendChild(default1)
    select.appendChild(option1)
    select.appendChild(option2)
    select.appendChild(option3)
  }

  choosePriority()

  function createTask(task){
    const p = document.createElement('p')
    const btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    p.textContent = (`${task} `)
    btn.textContent = "x"
    p.appendChild(btn)
    document.querySelector("#tasks").appendChild(p)
  }

  function handleDelete(e) {
    e.target.parentNode.remove()
  }


// Event Listeners:

taskForm.addEventListener('submit', handleTask);



});


///QUESTIONS:
// 1. scoping issue above
// 2. less cumbersome way to add the priority options into the drop down table?
// 3. format so there's a space between x and drop down without string interpolation?
// 4. had to change input form name to be underscores instead of dashes to make it work
