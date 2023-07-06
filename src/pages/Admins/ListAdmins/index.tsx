import { useState } from 'react';
import { Box } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {  ButtonGroup,Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CommonTable from '../../../components/Table';
import AddButton from '../../../components/AddButton';
import Header from '../../../components/Topbar/Header';
import { StyledSearch, StyledIcon } from './style';

const tableData = [
  {
    title: 'Article’s Title',
    country: "Venezuela",
    body: "sector x",

  },
  {
    title: 'Article’s Title',
    country: "Venezuela",
    body: "sector x",

  },
  {
    title: 'Article’s Title',
    country: "Venezuela",
    body: "sector x",

  },
  {
    title: 'Article’s Title',
    country: "Venezuela",
    body: "sector x",

  },
  {
    title: 'Article’s Title',
    country: "Venezuela",
    body: "sector x",

  },
  {
    title: 'Article’s Title',
    country: "Venezuela",
    body: "sector x",

  },
]

const tableHeading = {
  name: "Full name",
  email: "Email",
  domains: "Domains"
};





const LastAdmins = () => {

  const [tableContent, setTableContent] = useState(tableData);
  const [tableHeadingData, setTableHeadingData] = useState(tableHeading);

  return (
    <section>
      <Header title="Admin" />
      <Box sx={{ padding: '8px', bgcolor: '#FFFFFF', borderRadius: '30px', margin: '34px auto', maxWidth: '890px', pb: 5 }}>

        <CssBaseline />
        <Container >
          <ButtonGroup sx={{ display: 'flex', justifyContent: 'space-between', margin: '2px' }}>
            <Box sx={{ mt: 2 }}>
              <StyledSearch placeholder='Search' InputProps={{ endAdornment: <StyledIcon /> }} />
            </Box>
            {/* Button */}
            <Link to="/admins/new">
              <AddButton title="Add New Admin" />
            </Link>
          </ButtonGroup>
          
          <Typography variant="h6" sx={{ backgroundColor: '#FFF4F7;', fontWeight: 600, paddingLeft: '18px', width: '800px', color: '#641C36', margin: '20px',marginTop:'55px' }}>
            Published Admins
          </Typography>
          {/* table */}
          <CommonTable tableContent={tableContent} tableHeadingData={tableHeadingData} />
        </Container>
      
      </Box>
    </section>
  );
};

export default LastAdmins;