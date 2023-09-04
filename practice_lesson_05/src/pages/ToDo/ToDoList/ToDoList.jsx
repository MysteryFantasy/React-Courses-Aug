import React, {useState, useEffect} from 'react';
import ToDoListItem from './ToDoListItem/ToDoListItem';

import { 
    getToDoListFromApi,
    changeToDoItemInApi,
    deletedToDoItemInApi
} from '../../../services/toDoService';

export default function ToDoList({newToDoListTaskItem}) {
    const [list, setList] = useState([]);
    
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
        Object.keys(newToDoListTaskItem).length && setList(prevState => [...prevState, newToDoListTaskItem]);
    }, [newToDoListTaskItem]); 

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
    ? <ul>
        {list.map((item, index) => (
            <ToDoListItem key={index} item={item} completedItemBtn={completedItemBtn} deleteItemBtn={deleteItemBtn}/>
        ))}
    </ul> 
    : null; 
}