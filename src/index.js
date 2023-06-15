document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const taskForm = document.querySelector('form');

  function handleTask(e) {
    e.preventDefault();
    createTask(e.target.new_task_description.value);
    taskForm.reset();
  }



  function createTask(task){
    const p = document.createElement('p')
    const btn = document.createElement('button')
    const select = document.createElement('select')
    const option1 = document.createElement('option')
    const option2 =document.createElement('option')
    const option3 =document.createElement('option')
    btn.addEventListener('click', handleDelete)
    p.textContent = (`${task} `)
    btn.textContent = "x"
    option1.textContent = "High"
    option1.value = "High"
    option2.textContent= "Medium"
    option2.value = "Medium"
    option3.textContent= "Low"
    option3.value = "Low"
    p.appendChild(btn)
    p.appendChild(select)
    select.appendChild(option1)
    select.appendChild(option2)
    select.appendChild(option3)
    document.querySelector("#tasks").appendChild(p)
  }

  function handleDelete(e) {
    e.target.parentNode.remove()
  }

  
  
  



// Event Listeners:

taskForm.addEventListener('submit', handleTask);

// btn.addEventListener('click', handleDelete) ----> ask why works above and not here. scoping issue?

});


///QUESTIONS:
// 1. scoping issue above
// 2. less cumbersome way to add the priority options into the drop down table?
// 3. format so there's a space between x and drop down without string interpolation?
