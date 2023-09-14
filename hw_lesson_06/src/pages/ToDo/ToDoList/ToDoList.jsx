import React, {useState, useEffect, useMemo} from 'react';

import List from '@mui/material/List';

import ToDoListItem from './ToDoListItem/ToDoListItem';

import { 
    getToDoListFromApi,
    changeToDoItemInApi,
    deletedToDoItemInApi
} from '../../../services/toDoService';

import {
    FILTER_TODO_LIST_COMPLETED,
    FILTER_TODO_LIST_PROGRESS
} from '../../../constants/toDoConstants';

export default function ToDoList({newToDoListTaskItem, filterTitle, textColor, liftingList}) {
    
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    const sortedList = useMemo(() => {
        return filteredList.sort((a,b) => b.rating - a.rating); 
    }, [filteredList]);

    useEffect(() =>{
        (async () => {
            try{
                setList(await getToDoListFromApi());
            } catch(err){
                console.log(err, `error`);
            }
        })()
    }, []);
    
    useEffect(() => {
        setFilteredList(list);
        liftingList(list);
    }, [list]);

    useEffect(() => {
        Object.keys(newToDoListTaskItem).length && setList(prevState => [...prevState, newToDoListTaskItem]);
    }, [newToDoListTaskItem]); 
    
    useEffect(() => {
        switch(filterTitle){
            case FILTER_TODO_LIST_COMPLETED:
                setFilteredList(list.filter(item => item.completed));
                break;
            case FILTER_TODO_LIST_PROGRESS:
                setFilteredList(list.filter(item => !item.completed));
                break;
            default:
                setFilteredList(list);
        }
    }, [filterTitle, list]); 

    const completedItemBtn = (item) => { 
        (async () => {
            let changedItem = await changeToDoItemInApi(item.id, {completed: !item.completed});
            setList(prevState => prevState.map(element => {
                if(element.id === item.id) element = changedItem;
                return element;
            }))
        })()
    };

    const deleteItemBtn = (e, id) => {
        e.stopPropagation();
        (async () => {
            try{
                await deletedToDoItemInApi(id);
                setList(prevState => prevState.filter(item => item.id !== id));
            } catch(err){
                console.log(err, `error`);
            }
        })()
    };

    return list.length 
    ? <List style={{color: textColor}} sx={{ width: "100%"}}>
        {sortedList.map((item, index) => (
            <ToDoListItem key={index} item={item} completedItemBtn={completedItemBtn} deleteItemBtn={deleteItemBtn}/>
        ))}
    </List> 
    : null; 
}