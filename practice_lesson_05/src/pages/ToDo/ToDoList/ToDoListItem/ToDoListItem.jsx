import React from 'react';
import './style.sass';
import Button from '../../../../components/Button/Button';

import {
    ITEM_COMPLETED,
    ITEM_PROGRESS
} from '../../../../constants/toDoConstants';

export default function ToDoListItem({item, completedItemBtn, deleteItemBtn}) {

    const addClasstoItem = (item) => {
        const classNameOptions = [];
        classNameOptions.push(item.completed ? ITEM_COMPLETED : ITEM_PROGRESS);
        return classNameOptions.join(` `);
    }
    return (
        <li className={addClasstoItem(item)} onClick={() => completedItemBtn(item)}> 
                <strong>{item.rating}</strong> {item.title}
                <Button title="Delete" btnOnClickAction={(e) => deleteItemBtn(e, item.id)}/>
        </li>
    );
}