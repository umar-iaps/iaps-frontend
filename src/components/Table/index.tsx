import React, { useState } from 'react';
import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Button, ButtonGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import edit from '../../assets/edit.svg';
import deletes from '../../assets/delete.svg';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';



const CommonTable = (props) => {

    const { tableContent, tableHeadingData } = props

    const [page, setPage] = useState(0);
    const rowsPerPage = 5;
    const [selectedMember, setSelectedMember] = useState(null);

 
    const pageCount = Math.ceil(tableContent.length / rowsPerPage);

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    const handleEdit = (index: number) => {
        setSelectedMember(rows[page * rowsPerPage + index]);
      
    };

    const handleDelete = (index: number) => {
        const memberToDelete = rows[page * rowsPerPage + index];
      
    };
    return (
        <>
            <TableContainer sx={{ width: '850px' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    {/* Heading */}
                    <TableHead>   
                        <TableRow>
                            {Object.values(tableHeadingData).map((heading, index) => (
                                <TableCell key={index} sx={{ fontWeight: 600 }}>
                                    {heading}
                                </TableCell>
                            ))}
                            <TableCell sx={{ fontWeight: 600, marginRight: '20px' }} align="center">
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                       {/* Table body content */}
                    <TableBody>
                        {tableContent?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((content , index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                {Object.values(content).map((value, index) => (
                                    <TableCell key={index} component="td" scope="row">
                                        {value}
                                    </TableCell>
                                ))}
                                <TableCell align="center" sx={{ marginRight: 0 }}>
                                    <img src={edit} alt="" onClick={() => handleEdit(index)} />
                                    <img src={deletes} alt="" onClick={() => handleDelete(index)} style={{ marginLeft: '12px' }} />
                                </TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Stack spacing={2}>
                    <Pagination
                        count={pageCount}
                        variant="outlined"
                        shape="rounded"
                        sx={{ mt: 2 }}
                        page={page + 1}
                        onChange={(event, newPage) => handlePageChange(newPage - 1)}
                    />
                </Stack>
            </Box>

          </>
    );
};

export default CommonTable;