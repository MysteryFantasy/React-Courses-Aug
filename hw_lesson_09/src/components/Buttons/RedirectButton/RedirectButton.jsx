import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function RedirectButton({path, text }) {
    const navigation = useNavigate();
    const handleOnClickBtn = () => navigation(path);
    return (
        <Button sx={{m: 2}} variant="contained" startIcon={<ArrowBackIcon />} onClick={handleOnClickBtn}>{text}</Button>
    );
}