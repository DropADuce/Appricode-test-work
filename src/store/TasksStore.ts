import {makeAutoObservable} from "mobx";
import {ITasks} from "../models/types";

class TasksStore {
    tasks: ITasks[] = []
    currentFilter = 'ALL'

    constructor() {
        makeAutoObservable(this,{})
    }

    addTask(task: ITasks) {
        this.tasks.push(task)
    }

    setComplete(id: string) {
        this.tasks = this.tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed
                return task
            }
            return task
        })
    }

    deleteTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id)
    }

    setFilter(filterValue: string) {
        this.currentFilter = filterValue
    }

    get Tasks() {
        switch (this.currentFilter) {
            case 'COMPLETED': {
                return this.tasks.filter(task => task.completed)
            }
            case 'UNCOMPLETED' : {
                return this.tasks.filter(task => !task.completed)
            }
            default: {
                return [...this.tasks]
            }
        }
    }
}

export default new TasksStore()