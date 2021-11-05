import React, {FC, useState} from 'react'
import './style.scss'
import {Button, Collapse, IconButton, InputBase, Paper, styled} from "@mui/material";
import {AddTaskType} from "../../models/types";
import { v4 as uuid } from 'uuid';
import {Clear} from "@mui/icons-material";

const StyledButton = styled(Button)`
  background-color: green;
  color: snow;
  font-weight: bolder;

  :hover {
    background-color: green;
    cursor: pointer;
  }
`

const StyledPaper = styled(Paper)`
  background-color: inherit;
`

const StyledInput = styled(InputBase)`
  color: lightgray;
`

interface TaskAdderProps {
    addTask: AddTaskType
}

const TaskAdder:FC<TaskAdderProps> = ({addTask}) => {
    const [open, setOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const addNewTask = () => {
        addTask({id: uuid(), description: inputValue, completed: false})
    }

    return (
        <div className="taskAdder" onClick={(e) => {
            e.stopPropagation()
            setOpen(true)
        }}>
            <Collapse in={!open}>
                <div className="addTaskButton">
                    Добавить задачу
                </div>
            </Collapse>
            <Collapse in={open}>
                <StyledPaper>
                    <StyledInput multiline
                                 fullWidth
                                 placeholder={"Введите описание новой задачи"}
                                 onBlur={() => setOpen(false)}
                                 value={inputValue}
                                 onChange={(e) => setInputValue(e.target.value)}
                    />
                </StyledPaper>
                <div className="taskAdder__buttons">
                    <StyledButton onClick={(e) => {
                        e.stopPropagation()
                        addNewTask()
                        setInputValue('')
                        setOpen(false)
                    }}
                                  onMouseDown={e => e.preventDefault()}>
                        Добавить задачу
                    </StyledButton>
                    <IconButton
                        onClick={(e) => {
                            e.stopPropagation()
                            setInputValue('')
                            setOpen(false)
                        }}
                        onMouseDown={e => e.preventDefault()}>
                        <Clear/>
                    </IconButton>
                </div>
            </Collapse>
        </div>
    );
};

export default TaskAdder;