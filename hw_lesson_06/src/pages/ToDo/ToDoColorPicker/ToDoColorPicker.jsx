import React, {useState, useEffect, useCallback} from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { MuiColorInput } from 'mui-color-input';
import './style.sass';

import {TODO_COLOR} from '../../../constants/toDoConstants';
import useLocalStorage from '../../../hooks/useLocalStorage';

export default function ToDoColorPicker({liftingPickedColor}) {

    const [color, setColor] = useLocalStorage(`color`, TODO_COLOR);

    const pickedColor = (color) => {
        setColor(color)
    };

    useEffect(() => {
        liftingPickedColor(color);
    },[color]);

    const colorTitle = useCallback(() => {
        return <h3>Color: {color}</h3>
    }, [color]);

    return (
        <Box sx={{ maxWidth: 300, mt: 2, ml: 5}}>
            <Card variant="outlined">
                <CardContent>
                    {colorTitle()}
                    <hr/>
                    <MuiColorInput value={color} onChange={pickedColor} />
                </CardContent>
            </Card>
        </Box>
    );
}