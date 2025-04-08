import { tasksforAll } from "./list.js";
import { createModal } from "./tasks.js";

class DomTasks{

    constructor(){
        this.domList = document.querySelector('#tasks');
        this.tasks = tasksforAll
    }

    addTaskDom(){
        const addTaskButton = document.querySelector('#add-task');
        addTaskButton.addEventListener('click',()=>{
            createModal();

        });

    }

    todayDom(){

        const todayButton = document.querySelector('#today-button');
        todayButton.addEventListener('click', ()=>{
            const todayList = this.tasks.today();
            this.render(todayList);
        })
    }

    showAllDom(){

        const allButton = document.querySelector('#all-button');
        allButton.addEventListener('click', ()=>{
            const allList = this.tasks.showAll();
            this.render(allList)

        });

    }

    showWorkDom(){

        const workButton = document.querySelector('#work-button');
        workButton.addEventListener('click', ()=>{
            const workList = this.tasks.showWork();
            this.render(workList);
        })

    }

    showPersonalDom(){

        const personalButton = document.querySelector('#personal-button');
        personalButton.addEventListener('click',()=>{
            const personalList = this.tasks.showPersonal();
            this.render(personalList);
        })

    }

    showFamilyDom(){

        const familyButton = document.querySelector('#family-button');
        familyButton.addEventListener('click',()=>{
            const familyList = this.tasks.showFamily();
            this.render(familyList);
        })

    }

    deleteButtonDom(list){
        try{
            const deleteButtons = document.querySelectorAll('.delete-button')
            deleteButtons.forEach(button => {
                button.addEventListener('click',()=>{
                    const id = button.getAttribute('data-id');
                    this.tasks.deleteTask(id,list);
                    this.render(list);
                })

            })
        }catch{
            console.log('error')
        }
    }

    render(list = this.tasks.today()){

        const table = document.querySelector('table');
        table.textContent = ""
        const tableHeadings = document.createElement('tr')
        tableHeadings.innerHTML = `<th style="width: 50%;color:black">Name</th><th style="color:black">Date</th><th style="color:black">Category</th><th style="color:black">Priority</th><th style="color:black">Completed</th>`
        table.appendChild(tableHeadings)

        list.forEach(task => {
            const row = document.createElement('tr');
            row.classList.add("row-js")
            row.innerHTML = `<td>${task.name}</td><td>${task.date}</td><td>${task.category}</td><td>${task.priority}</td><td><button class="delete-button" data-id="${task.id}">${task.completed}</button></td>`;
            table.appendChild(row);

        });
        this.deleteButtonDom(list);
    }

}


const domTasksForAll = new DomTasks();
export { domTasksForAll }