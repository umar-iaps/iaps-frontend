import { useEffect, useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ButtonGroup, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CommonTable from "@components/Table";
import AddButton from "@components/AddButton";
import Header from "@components/Topbar/Header";
import { StyledIcon, StyledSearch } from "./style";
import { getAllProjects } from "@services/Projects/api";
import { projectHeadingData } from "@utils/tableHeadings";

const domainData = [
  { value: "", label: "None" },
  { value: 10, label: "Domain" },
  { value: 20, label: "Domain1" },
  { value: 30, label: "Domain2" },
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTableContent, setFilteredTableContent] = useState([]);

  useEffect(() => {
    getAllProjects().then((response: any) => {
      console.log("Response on Projects is ", response.data);
      const projectData = response.data;
      const newData = projectData.map((item) => {
        return {
          title: item.title,
          countries: item.countries[0] || "N/A",
          body: item.body,
          createdBy: item.createdBy,
          createdDate: new Date(item.createdDate).toLocaleDateString(),
        };
      });
      setFilteredTableContent(newData);
    });
  }, []);

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
                  sx={{ color: "#999999" }}
                >
                  Filter by sector
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="Age"
                  sx={{ borderRadius: "35px" }}
                >
                  {domainData.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
                <InputLabel
                  id="demo-select-small-label"
                  sx={{ color: "#999999" }}
                >
                  Filter by region
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="Age"
                  sx={{ borderRadius: "35px" }}
                >
                  {domainData.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
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
              path="/projects"
              tableContent={filteredTableContent}
              tableHeadingData={projectHeadingData}
            />
          )}
        </Container>
      </Box>
    </section>
  );
};

export default Projects;
