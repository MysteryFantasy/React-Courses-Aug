import React, {useEffect} from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import useLocalStorage from '../../../hooks/useLocalStorage';

import {
    FILTER_TODO_LIST_ALL,
    FILTER_TODO_LIST_COMPLETED,
    FILTER_TODO_LIST_PROGRESS
} from '../../../constants/toDoConstants';

export default function ToDoFilter({liftingFilterValue}) {

    const [filterValue, setFilterValue] = useLocalStorage(`filter`, FILTER_TODO_LIST_ALL);

    const filterToDoList = e => setFilterValue(e.target.value);
    
    useEffect(() => {
        liftingFilterValue(filterValue);
    }, [filterValue]);

    return (
        <FormControl sx={{ minWidth: 200, mt:2 }}>
            <InputLabel id="demo-simple-select-label">
                Filter to do tasks:
            </InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filterValue}
                label="Filter to do tasks:"
                onChange={filterToDoList}
            >
                <MenuItem value={FILTER_TODO_LIST_ALL}>All</MenuItem>
                <MenuItem value={FILTER_TODO_LIST_COMPLETED}>Completed</MenuItem>
                <MenuItem value={FILTER_TODO_LIST_PROGRESS}>Progress</MenuItem>
            </Select>
        </FormControl>
    );
}