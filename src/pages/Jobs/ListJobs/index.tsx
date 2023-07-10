import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ButtonGroup, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CommonTable from "@components/Table";
import AddButton from "@components/AddButton";
import Header from "@components/Topbar/Header";
import { StyledIcon, StyledSearch } from "./style";
import { jobHeadingData } from "@utils/tableHeadings";
import { deleteJob } from "../../../services/Jobs/api";
const tableData = [
  {
    name: "Article’s Title",
    position: "Venezuela",
  },
  {
    name: "Article’s Title",
    position: "Venezuela",
  },
  {
    name: "Article’s Title",
    position: "Venezuela",
  },
  {
    name: "Article’s Title",
    position: "Venezuela",
  },
  {
    name: "Article’s Title",
    position: "Venezuela",
  },
  {
    name: "Article’s Title",
    position: "Venezuela",
  },
];

// Heading

const ListJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTableContent, setFilteredTableContent] = useState(tableData);

  const navigate = useNavigate();
  useEffect(() => {}, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterTableContent(event.target.value);
  };

  const filterTableContent = (term) => {
    const filteredData = tableData.filter(
      (item) =>
        item.name.toLowerCase().includes(term.toLowerCase()) ||
        item.position.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredTableContent(filteredData);
  };

  const handleEdit = (id: any) => {
    navigate(`/jobs/${id}`);
  };

  const handleDelete = (id: any) => {
    console.log("Delete the entry", id);
    const delObj = { id };
    deleteJob(delObj).then((response) => {
      console.log("response from delete is ", response);
    });
  };

  return (
    <Box sx={{ mb: 5 }}>
      <Header title="Jobs" />
      <center>
        <Box
          sx={{
            padding: "8px",
            bgcolor: "#FFFFFF",
            borderRadius: "30px",
            // margin: "34px auto",
            maxWidth: "95%",
            // maxWidth: "890px",
            margin: "39px 40px 0px 155px",
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
                <StyledSearch
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  InputProps={{ endAdornment: <StyledIcon /> }}
                />
              </Box>
              <Link to="/jobs/new">
                <AddButton title="Add New Job" />
              </Link>
            </ButtonGroup>

            <Typography
              variant="h6"
              sx={{
                backgroundColor: "#FFF4F7;",
                fontWeight: 600,
                paddingLeft: "18px",
                // width: "800px",

                color: "#641C36",
                margin: "20px",
                marginTop: "55px",
                textAlign: "left",
              }}
            >
              Published Jobs
            </Typography>
            {/* table */}
            {filteredTableContent.length === 0 ? (
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                No records are found!
              </Typography>
            ) : (
              <CommonTable
                path="/jobs"
                tableContent={filteredTableContent}
                tableHeadingData={jobHeadingData}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            )}
          </Container>
        </Box>
      </center>
    </Box>
  );
};

export default ListJobs;
