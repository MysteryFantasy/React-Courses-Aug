import React from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {deleteCountryItemFromList} from '../../store/actions';

import {
    renderObjectList 
} from '../../utils/utils';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CountryCard() {
    const countries = useSelector(store => store.countries);
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const [searchParams] = useSearchParams();
    const searchParamTranslation = searchParams.get(`translation`);

    const { country: countryParam } = useParams();
    const country = countries.find((item) => item.name.official === countryParam);

    const handleItemDelete = (name) => {
        dispatch(deleteCountryItemFromList(name)); 
        navigation("/countries"); 
    };

    return (
        <Box sx={{ maxWidth: 300, mt: 2}}>
            <Paper elevation={6} sx={{m: 3, p:3, width: 400}}>
                <Card variant="outlined">
                    <CardContent>
                        <h3>
                            {searchParamTranslation
                                ? country.translations[searchParamTranslation].official
                                : country.name.official
                            }
                        </h3>
                        {country ? renderObjectList(country) : null}
                        <Button variant="contained" color="error" onClick={() => handleItemDelete((country.name.official))} endIcon={<DeleteIcon />}>Delete</Button>
                    </CardContent>
                </Card>
            </Paper>
        </Box>
    );
}