import { format } from "date-fns";

class Tasks{
    constructor(list = [{id:Date.now(),name:'To Do List Coding',category:'Personal',date:'2025/04/08',priority:'Medium',completed: 'End Task'}]){

        this.tasksList = list;

    }

    addTask(id,name,category,date,priority,completed = 'End Task'){

        let task = {
            id:id,
            name:name,
            category:category,
            date:date,
            priority:priority,
            completed:completed
        };

        this.tasksList.unshift(task)
        localStorage.setItem('tasksList', JSON.stringify(this.tasksList));


    }

    today(){
        const today = new Date();
        const formattedDate = format(today, "MMMM do, yyyy");
        const todayList = this.tasksList.filter(task => task.date === formattedDate);
        return todayList;
    }

    showAll(){

        return this.tasksList;

    }

    showWork(){

        const workList = this.tasksList.filter(task => task.category === 'Work');
        return workList;

    }

    showPersonal(){

        const personalList = this.tasksList.filter(task => task.category === 'Personal');
        return personalList;

    }

    showFamily(){

        const familyList = this.tasksList.filter(task => task.category === 'Family');
        return familyList;

    }

    deleteTask(id,list){

        //Filter List
        const number = list.findIndex(task => task.id === Number(id));
        list.splice(number,1)


        // Real List
        const index = this.tasksList.findIndex(task => task.id === Number(id));
        this.tasksList.splice(index, 1);

        // Local Storage list
        let tasksList = this.tasksList.filter(task => task.id !== id);
        localStorage.setItem('tasksList', JSON.stringify(tasksList));

    }

}




function chooseList(){

    const saveTasks = localStorage.getItem('tasksList')
    if (saveTasks){
        const tasksList = JSON.parse(saveTasks);
        const tasksforAll = new Tasks(tasksList);
        return tasksforAll

    }else{
        const tasksforAll = new Tasks();
        return tasksforAll

    }


}

const tasksforAll = chooseList()

export { tasksforAll }