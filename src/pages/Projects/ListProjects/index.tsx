import { useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ButtonGroup, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CommonTable from "../../../components/Table";
import AddButton from "../../../components/AddButton";
import Header from "../../../components/Topbar/Header";
import { StyledIcon, StyledSearch } from "./style";

const tableData = [
  {
    title: "Article’s Title",
    country: "Venezuela",
    body: "sector x",
    created: "Domain",
    publishDate: "02/05/23",
  },
  {
    title: "Article’s Title",
    country: "Venezuela",
    body: "sector x",
    created: "Domain",
    publishDate: "02/05/23",
  },
  {
    title: "Article’s Title",
    country: "Venezuela",
    body: "sector x",
    created: "Domain",
    publishDate: "02/05/23",
  },
  {
    title: "Article’s Title",
    country: "Venezuela",
    body: "sector x",
    created: "Domain",
    publishDate: "02/05/23",
  },
  {
    title: "Article’s Title",
    country: "Venezuela",
    body: "sector x",
    created: "Domain",
    publishDate: "02/05/23",
  },
  {
    title: "Article’s Title",
    country: "Venezuela",
    body: "sector x",
    created: "Domain",
    publishDate: "02/05/23",
  },
];

const tableHeading = {
  title: "Title",
  country: "Country",
  body: "Body",
  created: "Created by",
  published: "Date Published",
};

// styled css

const Projects = () => {
  const [tableContent, setTableContent] = useState(tableData);
  const [tableHeadingData, setTableHeadingData] = useState(tableHeading);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTableContent, setFilteredTableContent] = useState(tableData);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterTableContent(event.target.value);
  };

  const filterTableContent = (term: any) => {
    const filteredData = tableData.filter(
      (item) =>
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.country.toLowerCase().includes(term.toLowerCase()) ||
        item.body.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredTableContent(filteredData);
  };

  return (
    <section>
      {/* topbar */}
      <Header title="Projects" />
      <Box
        sx={{
          padding: "8px",
          bgcolor: "#FFFFFF",
          borderRadius: "30px",
          margin: "34px auto",
          maxWidth: "890px",
          pb: 5,
        }}
      >
        {/* <Grid container >
                    <Grid item > */}
        <CssBaseline />
        <Container>
          <ButtonGroup
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "2px",
            }}
          >
            <Box sx={{ mt: 2 }}>
              <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
                <InputLabel
                  id="demo-select-small-label"
                  style={{ color: "#999" }}
                >
                  Filter by sector
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="Age"
                  sx={{ borderRadius: "35px" }}
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
                <InputLabel
                  id="demo-select-small-label"
                  style={{ color: "#999" }}
                >
                  Filter by region
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="Age"
                  sx={{ borderRadius: "35px" }}
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
            <Link to="/projects/new">
              <AddButton title="Add New Project" />
            </Link>
          </ButtonGroup>
          <Box>
            <StyledSearch
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{ endAdornment: <StyledIcon /> }}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              backgroundColor: "#FFF4F7;",
              fontWeight: 600,
              paddingLeft: "18px",
              // width: "810px",
              color: "#641C36",
              margin: "20px",
            }}
          >
            Published Projects
          </Typography>
          {filteredTableContent.length === 0 ? (
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              No records are found!
            </Typography>
          ) : (
            <CommonTable
              tableContent={filteredTableContent}
              tableHeadingData={tableHeadingData}
            />
          )}
        </Container>
        {/* </Grid>
                </Grid> */}
      </Box>
    </section>
  );
};

export default Projects;
