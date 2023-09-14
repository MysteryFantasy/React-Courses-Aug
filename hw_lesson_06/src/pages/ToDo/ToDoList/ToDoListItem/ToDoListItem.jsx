import React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './style.sass';

import {
    ITEM_COMPLETED,
    ITEM_PROGRESS
} from '../../../../constants/toDoConstants';

export default function ToDoListItem({item, completedItemBtn, deleteItemBtn}) {

    const addClasstoItem = (item) => {
        const classNameOptions = [`list__item`];
        classNameOptions.push(item.completed ? ITEM_COMPLETED : ITEM_PROGRESS);
        return classNameOptions.join(` `);
    };
    
    return (
        <ListItem disablePadding className={addClasstoItem(item)} onClick={() => completedItemBtn(item)}>
            <ListItemButton>
                <ListItemText>
                    <strong>{item.rating}</strong> {item.title}
                </ListItemText>
                <IconButton edge="end" aria-label="delete" onClick={(e) => deleteItemBtn(e, item.id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemButton>
        </ListItem>
    );
}