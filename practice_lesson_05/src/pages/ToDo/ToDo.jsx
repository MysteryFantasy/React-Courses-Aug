import React, {useState} from 'react';
import ToDoList from './ToDoList/ToDoList';
import ToDoForm from './ToDoForm/ToDoForm';

export default function ToDo() {
    const [newToDoListTaskItem, setNewToDoListTaskItem]= useState({});

    return (
        <>
            <ToDoForm liftingNewToDoListItem={setNewToDoListTaskItem}/>
            <ToDoList newToDoListTaskItem={newToDoListTaskItem}/>
        </>
    );
}