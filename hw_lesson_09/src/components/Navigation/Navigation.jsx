import React from 'react';
import {NavLink} from 'react-router-dom';

import './style.sass';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

export default function Navigation() {

    return (
        <AppBar position="static" sx = {{mb: 3, width: 510}}>
            <Toolbar>
                <List sx={{mr: 2, display: { xs: 'none', md: 'flex' }}}>
                    <ListItem component="nav">
                        <ListItemButton>
                                <NavLink to="/">Home</NavLink>
                        </ListItemButton>
                    </ListItem>
                    <ListItem component="nav">
                        <ListItemButton>
                            <NavLink to="countries">Countries</NavLink>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Toolbar>
        </AppBar>
    );
}