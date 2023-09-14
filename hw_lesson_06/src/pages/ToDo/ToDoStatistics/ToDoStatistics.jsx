import React, {memo} from 'react';

import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import './style.sass';

export default memo(function ToDoStatistics({list=[]}) {
    return (
        <TableContainer component={Paper} elevation={3} className="todo__statistics">
            <Typography
                variant="h5"
                id="tableTitle"
                component="div"
                textAlign="center" 
                sx={{ flexGrow: 1, mt:1 }}
            >
                Statistics:
            </Typography>
            <Table aria-label="simple table">
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            All Tasks:
                        </TableCell>
                        <TableCell align="right">{list.length}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Completed Tasks:
                        </TableCell>
                        <TableCell align="right">{list.filter(item => item.completed).length}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Tasks in Progress:
                        </TableCell>
                        <TableCell align="right">{list.filter(item => !item.completed).length}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}, (prevProps, nextProps) => {
});