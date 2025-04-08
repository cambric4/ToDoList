import { tasksforAll } from "./list.js";
import ('./dom.js').then(({ domTasksForAll }) => {
    domTasksForAll.render();
    domTasksForAll.todayDom();
    domTasksForAll.showAllDom();
    domTasksForAll.showWorkDom();
    domTasksForAll.showPersonalDom();
    domTasksForAll.showFamilyDom();
    domTasksForAll.addTaskDom();
  });  
import {format, parseISO } from 'date-fns';

function createModal(domTasks) {

    // Tasks Object //
    const tasks = tasksforAll

    // dialog //
    const dialog = document.createElement('dialog')
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // close button //
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerText = "x"

    // FORM //

    const form = document.createElement('form')


    // Name Input //
    //label//
    const taskNameLabel = document.createElement('label');
    taskNameLabel.setAttribute('for', 'task-name');
    taskNameLabel.innerText = 'Task Name : ';
    //input//
    const taskNameInput = document.createElement('input');
    taskNameInput.type = 'text';
    taskNameInput.id = 'task-name';
    taskNameInput.required = true;

    // Category Select //
    //label//
    const taskCategoryLabel = document.createElement('label');
    taskCategoryLabel.setAttribute('for','task-category');
    taskCategoryLabel.innerText = 'Category : '
    //select//
    const taskCategorySelect = document.createElement('select');
    taskCategorySelect.id = 'task-category';
    taskCategorySelect.required = true;
    //options//
    const workOption = document.createElement('option');
    workOption.value = 'Work'
    workOption.innerText = 'Work'
    const personalOption =  document.createElement('option');
    personalOption.value = 'Personal';
    personalOption.innerText = 'Personal'
    const familyOption = document.createElement('option');
    familyOption.value = 'Family';
    familyOption.innerText = 'Family';
    //apend options//
    taskCategorySelect.appendChild(workOption);
    taskCategorySelect.appendChild(personalOption);
    taskCategorySelect.appendChild(familyOption);

    // DATE //
    //label
    const taskDateLabel = document.createElement('label');
    taskDateLabel.setAttribute('for', 'task-date');
    taskDateLabel.innerText = 'Date : ';
    //input
    const taskDateInput = document.createElement('input');
    taskDateInput.type = 'date';
    taskDateInput.id = 'task-date';
    taskDateInput.required = true;

    // PRIORITY
    //label
    const taskPriorityLabel = document.createElement('label');
    taskPriorityLabel.setAttribute('for', 'task-priority');
    taskPriorityLabel.innerText = 'Priority : ';
    //select
    const taskPrioritySelect = document.createElement('select');
    taskPrioritySelect.id = 'task-priority';
    taskPrioritySelect.required = true;
    //options
    const lowOption = document.createElement('option');
    lowOption.value = 'Low';
    lowOption.innerText = 'Low';
    const mediumOption = document.createElement('option');
    mediumOption.value = 'Medium';
    mediumOption.innerText = 'Medium';
    const urgentOption = document.createElement('option');
    urgentOption.value = 'Urgent';
    urgentOption.innerText = 'Urgent';
    //apend
    taskPrioritySelect.appendChild(lowOption);
    taskPrioritySelect.appendChild(mediumOption);
    taskPrioritySelect.appendChild(urgentOption);

    // Sunmit Button //
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.innerText = 'Save'

    // From Appends Elements
    form.appendChild(taskNameLabel);
    form.appendChild(taskNameInput);
    form.appendChild(taskCategoryLabel);
    form.appendChild(taskCategorySelect);
    form.appendChild(taskDateLabel);
    form.appendChild(taskDateInput);
    form.appendChild(taskPriorityLabel);
    form.appendChild(taskPrioritySelect);
    form.appendChild(submitButton);
    // Modal Append

    dialog.appendChild(closeButton);
    //Modal Content Append
    modalContent.appendChild(form);
    //dialog append
    dialog.appendChild(modalContent);
    //Div Append
    document.body.appendChild(dialog)
    dialog.showModal();

    //Close Button
    closeButton.addEventListener('click', ()=>{
        dialog.remove();
    })
    //Save Button
    submitButton.addEventListener('click', (event) => {
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
    
        event.preventDefault();
    
        let nameUpper = taskNameInput.value.charAt(0).toUpperCase() + taskNameInput.value.slice(1);
        const date = taskDateInput.value;
        const dateParse = parseISO(date);
        const formatDate = format(dateParse, "MMMM do, yyyy");
    
        tasks.addTask(Date.now(), nameUpper, taskCategorySelect.value, formatDate, taskPrioritySelect.value);
        dialog.remove();
        domTasks.render(tasks.showAll()); // domTasks comes from the parameter now
      });
    }



export { createModal }