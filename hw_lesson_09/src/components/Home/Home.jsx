import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Home() {
    return (
        <Box sx={{ maxWidth: 450, ml: 3, mr: 2}}>
            <Card sx = {{backgroundColor: 'primary.dark'}} elevation={4}>
                <CardContent sx = {{color: 'white'}}>
                    <h3>Home Component 🏡</h3>
                </CardContent>
            </Card>
        </Box>
    );
}