// when button clicked form pop up when form submitted
// create new 'tasks' div with the info 
// task name, task date due, task priority

import {container} from './index.js';
import {tasks} from './index.js';

export function generate(){

    let form = document.createElement('form');
   
    let taskName = document.createElement('input');
        taskName.type = 'text';
        taskName.name = 'Task';
        form.appendChild(taskName);

    let priority = document.createElement('select');
        let low = document.createElement('option');
            low.value = 'low';
            low.text = 'low';
        let medium = document.createElement('option');
            medium.value = 'medium';
            medium.text = 'medium';
        let high = document.createElement('option');
            high.value = 'high';
            high.text = 'high';
        priority.appendChild(low);
        priority.appendChild(medium);
        priority.appendChild(high);
        form.appendChild(priority);

    let date = document.createElement('input')
        date.type = 'date';
    form.appendChild(date);

    let submit = document.createElement('button');
        submit.type = 'submit'
        submit.textContent = 'submit'
    form.appendChild(submit)
    container.appendChild(form)

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        //make buttns 
        const comBtn = document.createElement('button')
        comBtn.innerText = "O"
        const editBtn = document.createElement('button')
        editBtn.innerText = "Edit"
        const delBtn = document.createElement('button')
        delBtn.innerText = "Delete"
        //get inputs
        const tmInput = taskName.value
        const priorityInput = priority.value
        const dateInput = date.value
        //take input values and create elements with them
        const tmInputdiv = document.createElement('div')
        tmInputdiv.innerText = `${tmInput}`
        const dateInputDiv = document.createElement('div')
        dateInputDiv.innerText = `${priorityInput}`
        const priorityInputDiv = document.createElement('div')
        priorityInputDiv.innerText = `${dateInput}`
        //append the elements
        tasks.appendChild(comBtn)
        tasks.appendChild(tmInputdiv)
        tasks.appendChild(dateInputDiv)
        tasks.appendChild(priorityInputDiv)
        tasks.appendChild(editBtn)
        tasks.appendChild(delBtn)
  
    })

};

