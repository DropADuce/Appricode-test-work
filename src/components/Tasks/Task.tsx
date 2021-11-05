import React, {FC} from "react";
import './style.scss'
import {Checkbox, IconButton, styled, Typography} from "@mui/material";
import {DeleteTaskType, SetCompleteType} from "../../models/types";
import {Clear} from "@mui/icons-material";

const StyledTask = styled(Typography)<{completed: boolean}>`
  width: 100%;
  ${({completed}) => completed && `
    text-decoration: line-through;
    `}
`

interface TaskProps {
    completed: boolean,
    description: string,
    id: string
    setCompleted: SetCompleteType,
    deleteTask: DeleteTaskType
}

const Task: FC<TaskProps> = ({completed, description, ...props}) => {
    return (
        <div className="task">
            <Checkbox checked={completed} onChange={() => {
                props.setCompleted(props.id)
            }}/>
            <StyledTask completed={completed}>{description}</StyledTask>
            <div className="task__iconContainer">
                <IconButton onClick={() => props.deleteTask(props.id)}>
                    <Clear />
                </IconButton>
            </div>
        </div>
    );
};

export default Task;