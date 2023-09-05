import React, {useState, useEffect} from 'react';
import './style.sass'

import {
    FILTER_TODO_LIST_ALL,
    FILTER_TODO_LIST_COMPLETED,
    FILTER_TODO_LIST_PROGRESS
} from '../../../constants/toDoConstants'

export default function ToDoFilter({liftingFilterValue}) {
    
    const [filterValue, setFilterValue] = useState(FILTER_TODO_LIST_ALL);
    const filterToDoList = e => setFilterValue(e.target.value);
    
    useEffect(() => {
        liftingFilterValue(filterValue);
    }, [filterValue]);

    return (
        <div className='todo__filter'>
            <label>
                Filter to do tasks:
                <select defaultValue={filterValue} onChange={filterToDoList}>
                    <option value={FILTER_TODO_LIST_ALL}>All</option>
                    <option value={FILTER_TODO_LIST_COMPLETED}>Completed</option>
                    <option value={FILTER_TODO_LIST_PROGRESS}>Progress</option>
                </select>
            </label>
        </div>
    );
}