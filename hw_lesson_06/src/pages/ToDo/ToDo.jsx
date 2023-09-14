import React, {useState} from 'react';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import ToDoList from './ToDoList/ToDoList';
import ToDoForm from './ToDoForm/ToDoForm';
import ToDoFilter from './ToDoFilter/ToDoFilter';
import ToDoStatistics from './ToDoStatistics/ToDoStatistics';
import ToDoColorPicker from './ToDoColorPicker/ToDoColorPicker';

export default function ToDo() {
    const [newToDoListTaskItem, setNewToDoListTaskItem]= useState({});
    const [filterTitle, setFilterTitle] = useState();
    const [textColor, setTextColor] = useState();
    const [list, setList] = useState();

    return (
        <Container>
            <Paper elevation={6} sx={{m: 5, p:5, width: 700}}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography 
                            variant="h4" 
                            component="div" 
                            textAlign="center" 
                            sx={{ flexGrow: 1 }}
                        >
                            To Do List
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container 
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    <Grid item xs={6}>
                        <ToDoForm liftingNewToDoListItem={setNewToDoListTaskItem}/>
                    </Grid>
                    <Grid item xs={6}>
                        <ToDoStatistics list={list}/>
                    </Grid>
                    <Grid item xs={6}>
                        <ToDoFilter liftingFilterValue={setFilterTitle}/>
                    </Grid>
                    <Grid item xs={6}>
                        <ToDoColorPicker liftingPickedColor={setTextColor} />
                    </Grid>
                </Grid>
                <ToDoList newToDoListTaskItem={newToDoListTaskItem} filterTitle={filterTitle} textColor={textColor} liftingList={setList}/>      
            </Paper>
        </Container>
    );
}