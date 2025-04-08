
import './style.css'
import('./dom.js').then(({ domTasksForAll }) => {
    domTasksForAll.render();
    domTasksForAll.todayDom();
    domTasksForAll.showAllDom();
    domTasksForAll.showWorkDom();
    domTasksForAll.showPersonalDom();
    domTasksForAll.showFamilyDom();
    domTasksForAll.addTaskDom();
  });  
import { format } from 'date-fns';


//localStorage.clear();

const today = new Date();
const formattedDate = format(today, "MMMM do, yyyy")
const domTasks = domTasksForAll;

domTasks.render();

// CALLBACKS

//TodayList
domTasks.todayDom();

// ShowAll
domTasks.showAllDom();

// WorkList
domTasks.showWorkDom();

//PersonalList
domTasks.showPersonalDom();

//FamilyList
domTasks.showFamilyDom();

// Add Task Button

domTasks.addTaskDom();

function createModal() {
    if (!domTasks) return console.error('domTasks not loaded yet');
    domTasks.doSomething(); // safe usage
  }