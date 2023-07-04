import React, {useState} from 'react'
import Box from '@mui/material/Box';
import { Button, ButtonGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import {  TextField, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';


const StyledSearch = styled(TextField)(({ theme }) => ({
  display: 'flex',
  verticalAlign: "baseline",
  borderRadius: '26px',
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
  transform: 'translate(-60px, 0px)',
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

const ListJobs = () => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;
  const [selectedMember, setSelectedMember] = useState(null);

  function createData(
    title: string,
    location: string,
  ) {
    return { title, location};
  }
  const rows = [
    createData('Article List', 'Venezuela'),
    createData('Article List', 'Venezuela'),
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
    <React.Fragment>
    <Container sx={{  bgcolor: '#FFFFFF', borderRadius: '30px', margin: '40px auto', miWidth: '80vw', height: '75vh' }}>
    <ButtonGroup sx={{ display: 'flex', justifyContent: 'space-between', margin: '30px'}}>
    <StyledSearch placeholder='Search' InputProps={{ endAdornment: <StyledIcon /> }} />
    <Link to="/job/new">
    <StyledButton variant="contained" startIcon={<AddIcon />} sx={{ textTransform: 'none' }}>Add New Job</StyledButton>
        </Link>
        </ButtonGroup>
        <Typography variant="h6" sx={{ backgroundColor: '#F2F2F2', fontWeight: 600, paddingLeft: '18px' }}>
          Published Jobs
        </Typography>

        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{fontWeight: 600}}>Title</TableCell>
                <TableCell sx={{fontWeight: 600}} align="right">Location</TableCell>
                <TableCell sx={{fontWeight: 600, marginRight: '20px'}} align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any, index: number) => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.location}</TableCell>
                  <TableCell align="center" sx={{marginRight: 0}}>
                    <Button variant="text" startIcon={<EditIcon />}  onClick={() => handleEdit(index)}>
                    </Button>
                    <Button variant="text" startIcon={<DeleteIcon />}  onClick={() => handleDelete(index)}>
                    </Button>
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
    </React.Fragment>
  )
}

export default ListJobs;