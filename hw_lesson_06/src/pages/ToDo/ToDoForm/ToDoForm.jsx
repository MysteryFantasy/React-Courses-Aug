import React, {useState, useRef} from 'react';

import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import './style.sass';
import {addToDoItemToApi} from '../../../services/toDoService';

export default function ToDoForm({liftingNewToDoListItem}) {
    const [newToDoListItem, setNewToDoListItem] = useState({
        title: '',
        completed: true,
    });

    const receiveTitleFromInput = e => setNewToDoListItem(prevState => ({...prevState, title: e.target.value}));
    const completedTaskItemBtn = e => setNewToDoListItem(prevState => ({...prevState, completed: e.target.checked}));

    const inputTitleText = useRef();

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const submitBtn = e => {
        e.preventDefault();
        if(!newToDoListItem.title){
            inputTitleText.current.focus();
            return;
        }
        (async () => {
            let addedNewToDoListItem = await addToDoItemToApi(newToDoListItem);
            liftingNewToDoListItem(addedNewToDoListItem);
            inputTitleText.current.value = " ";
            setNewToDoListItem(" ");
        })()
    };

    return (
        <Paper elevation={3}>
            <form className="todo__form" onSubmit={submitBtn}>
                <label>
                    To do task title:{" "}
                    <input
                        type="text"
                        id="toDoTitle"
                        defaultValue={newToDoListItem.title}
                        onChange={receiveTitleFromInput}
                        ref={inputTitleText}
                    />
                </label>
        
                <label>
                    To do task completed:{" "}
                    <Checkbox {...label} 
                        defaultChecked
                        id="toDoCompleted"
                        onChange={completedTaskItemBtn}
                    />
                </label>
                <Button variant="contained" type="submit" endIcon={<SendIcon />}>Add Task</Button>
            </form>
        </Paper>
    );
}