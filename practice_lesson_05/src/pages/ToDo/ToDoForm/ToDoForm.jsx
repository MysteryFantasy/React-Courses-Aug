import React, {useState, useRef} from 'react';
import './style.sass';
import {addToDoItemToApi} from '../../../services/toDoService'

export default function ToDoForm({liftingNewToDoListItem}) {
    const [newToDoListItem, setNewToDoListItem] = useState({
        title: '',
        completed: true,
    });

    const receiveTitleFromInput = e => setNewToDoListItem(prevState => ({...prevState, title: e.target.value}));
    const completedTaskItemBtn = e => setNewToDoListItem(prevState => ({...prevState, completed: e.target.checked}));

    const inputTitleText = useRef();

    const submitBtn = e => {
        e.preventDefault();
        if(!newToDoListItem.title){
            inputTitleText.current.focus();
            return;
        }
        (async () => {
            let addedNewToDoListItem = await addToDoItemToApi(newToDoListItem);
            liftingNewToDoListItem(addedNewToDoListItem);
        })()
    }

    return (
        <form onSubmit={submitBtn}>
            <label>
                To do task title:
                <input
                    type="text"
                    id="toDoTitle"
                    defaultValue={newToDoListItem.title}
                    onChange={receiveTitleFromInput}
                    ref={inputTitleText}
                />
            </label>
    
            <label>
                To do task completed:
                <input
                    type="checkbox"
                    id="toDoCompleted"
                    defaultChecked={newToDoListItem.completed}
                    onChange={completedTaskItemBtn}
                />
            </label>
            <button>Add Task</button>
      </form>
    );
}