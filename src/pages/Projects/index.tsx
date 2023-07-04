import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import  {useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Button, ButtonGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import edit from '../../assets/edit.svg';
import deletes from '../../assets/delete.svg';


const StyledSearch = styled(TextField)(({ theme }) => ({
    display: 'flex',
    verticalAlign: "baseline",
    borderRadius: '26px',
    width: '205px',
    marginLeft: '15px',
    border: 'none',
    '& .MuiInputBase-root': {
        textAlign: 'center',
        borderRadius: '26px',
        height: '45px',
        '& input': {
            textAlign: 'center',
        },

    },
}));


const StyledIcon = styled(SearchIcon)(({ theme }) => ({
    transform: 'translate(-44px, 2px)',
    color: ' #999',
    fontSize: '22px',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: '26px',
    background: '#C64B68',
    width: '189px',
    padding: '8px 24px 8px 20px',
    height: '44px',
    '&:hover': {
        background: '#C64B68',
    },
}));


const Projects = () => {
    const [page, setPage] = useState(0);
    const rowsPerPage = 5;
    const [selectedMember, setSelectedMember] = useState(null);

    function createData(
        title: string,
        country: string,
        body: string,
        created: string,
        publishDate: string,
    ) {
        return { title, country, body, created, publishDate };
    }

    const rows = [
        createData('Article’s Title', 'Venezuela', 'sector x', 'Domain', '02/05/23'),
        createData('Article’s Title', 'Venezuela', 'sector x', 'Domain', '02/05/23'),
        createData('Article’s Title', 'Venezuela', 'sector x', 'Domain', '02/05/23'),
        createData('Article’s Title', 'Venezuela', 'sector x', 'Domain', '02/05/23'),
        createData('Article’s Title', 'Venezuela', 'sector x', 'Domain', '02/05/23'),
        createData('Article’s Title', 'Venezuela', 'sector x', 'Domain', '02/05/23'),
    ];

    const pageCount = Math.ceil(rows.length / rowsPerPage);

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    const handleEdit = (index: number) => {
        setSelectedMember(rows[page * rowsPerPage + index]);
        // Handle edit logic here
    };

    const handleDelete = (index: number) => {
        const memberToDelete = rows[page * rowsPerPage + index];
        // Handle delete logic here
    };
    return (
        <section>
            <Box sx={{ padding: '8px', bgcolor: '#FFFFFF', borderRadius: '30px', margin: '34px auto', maxWidth: '965px' }}>
                <Grid container >
                    <Grid item >
                        <CssBaseline />
                        <Container >
                            <ButtonGroup sx={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
                                <Box>
                                    <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
                                        <InputLabel id="demo-select-small-label">Filter by sector</InputLabel>
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"

                                            label="Age"
                                            sx={{ borderRadius: '35px' }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
                                        <InputLabel id="demo-select-small-label">Filter by region</InputLabel>
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"

                                            label="Age"
                                            sx={{ borderRadius: '35px' }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Link to="/job/new">
                                    <StyledButton variant="contained" startIcon={<AddIcon />} sx={{ textTransform: 'none' }}> Add New Member</StyledButton>
                                </Link>
                            </ButtonGroup>
                            <Box>
                                <StyledSearch placeholder='Search' InputProps={{ endAdornment: <StyledIcon /> }} />
                            </Box>
                            <Typography variant="h6" sx={{ backgroundColor: '#FFF4F7;', fontWeight: 600, paddingLeft: '18px', width: '880px', color: '#641C36', margin: '20px' }}>
                                Published Projects
                            </Typography>
                            <TableContainer sx={{ width: '900px' }}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 600 }}>Title</TableCell>
                                            <TableCell sx={{ fontWeight: 600 }} align="right">Country</TableCell>
                                            <TableCell sx={{ fontWeight: 600, marginRight: '20px' }} align="center">Body</TableCell>
                                            <TableCell sx={{ fontWeight: 600, marginRight: '20px' }} align="center">Created by</TableCell>
                                            <TableCell sx={{ fontWeight: 600, marginRight: '20px' }} align="center">Date Published</TableCell>
                                            <TableCell sx={{ fontWeight: 600, marginRight: '20px' }} align="center">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any, index: number) => (
                                            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell component="th" scope="row">
                                                    {row.title}
                                                </TableCell>
                                                <TableCell align="right">{row.country}</TableCell>
                                                <TableCell align="center">{row.body}</TableCell>
                                                <TableCell align="center">{row.created}</TableCell>
                                                <TableCell align="center">{row.publishDate}</TableCell>
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
                                {Array.from(Array(pageCount).keys()).map((index) => (
                                    <Button
                                        key={index}
                                        variant={index === page ? 'contained' : 'text'}
                                        color="primary"
                                        onClick={() => handlePageChange(index)}
                                        sx={{ margin: '0 5px' }}
                                    >
                                        {index + 1}
                                    </Button>
                                ))}
                            </Box>
                        </Container>
                    </Grid>
                </Grid>
            </Box>
        </section>
    );
};

export default Projects;