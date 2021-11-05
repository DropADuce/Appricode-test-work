import React, {FC} from "react";
import './style.scss'
import {AddTaskType, DeleteTaskType, ITasks, SetCompleteType} from "../../models/types";
import TaskAdder from "../TaskAdder/TaskAdder";
import Task from "../Tasks/Task";

interface DeskProps {
    tasks: ITasks[];
    addTask: AddTaskType
    setComplete: SetCompleteType;
    deleteTask: DeleteTaskType;
}

const Desk: FC<DeskProps> = ({tasks, setComplete, deleteTask, addTask}) => {
    return (
        <div className={"desk"}>
            <div className="desk__wrapper">
                <span className={"header"}>Список задач</span>
                <div className="tasks">
                    {tasks.map(task => <Task
                        key={task.id}
                        setCompleted={setComplete}
                        deleteTask={deleteTask}
                        {...task}/>)}
                </div>
                <TaskAdder addTask={addTask}/>
            </div>
        </div>
    );
};

export default Desk;