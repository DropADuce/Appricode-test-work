import React from "react";
import {observer} from "mobx-react-lite";
import Filters from "../components/Filters/Filters";
import Desk from "../components/Desk/Desk";
import TasksStore from "../store/TasksStore";

const ToDoPage = observer(() => {
    return (
        <div className={'boardArea'}>
            <div className="boardArea__wrapper">
                <Filters filter={TasksStore.currentFilter} setFilter={TasksStore.setFilter.bind(TasksStore)}/>
                <Desk
                    tasks={TasksStore.Tasks}
                    addTask={TasksStore.addTask.bind(TasksStore)}
                    setComplete={TasksStore.setComplete.bind(TasksStore)}
                    deleteTask={TasksStore.deleteTask.bind(TasksStore)}/>
            </div>
        </div>
    );
});

export default ToDoPage;