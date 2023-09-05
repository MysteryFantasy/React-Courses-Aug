import React, {useState} from 'react';
import ToDoList from './ToDoList/ToDoList';
import ToDoForm from './ToDoForm/ToDoForm';
import ToDoFilter from './ToDoFilter/ToDoFilter';

export default function ToDo() {
    const [newToDoListTaskItem, setNewToDoListTaskItem]= useState({});
    const [filterTitle, setFilterTitle] = useState();

    return (
        <>
            <ToDoForm liftingNewToDoListItem={setNewToDoListTaskItem}/>
            <ToDoFilter liftingFilterValue={setFilterTitle}/>
            <ToDoList newToDoListTaskItem={newToDoListTaskItem} filterTitle={filterTitle}/>
        </>
    );
}