import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {deleteCountryItemFromList} from '../../store/actions';

import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CountriesList() {
    const countries = useSelector(store => store.countries);
    const dispatch = useDispatch();

    const handleItemDelete = (name) => dispatch(deleteCountryItemFromList(name));
    
    return countries.length ? (
        <Paper elevation={4} sx={{m: 3, p:3, width: 400}}>
            <h3>Countries List</h3>
            <List>{countries.map((country, index) => (
                <ListItem disablePadding key={index}>
                    <ListItemButton>
                        <ListItemText>
                            <Link to={country.name.official}>{country.flag} {country.name.official}</Link>{" "}
                        </ListItemText>
                        <IconButton edge="end" aria-label="delete" onClick={() => handleItemDelete((country.name.official))}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemButton>
                </ListItem>))}
            </List>
        </Paper>
    ): null;
}