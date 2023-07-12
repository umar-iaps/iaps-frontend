import { useState, useEffect } from "react";
import { Box, Typography, Snackbar } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ButtonGroup } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CommonTable from "@components/Table";
import AddButton from "@components/AddButton";
import Header from "@components/Topbar/Header";
import { StyledIcon, StyledSearch } from "./style";
import { jobHeadingData } from "@utils/tableHeadings";
import { deleteJob, getJobsByDomainId } from "@services/Jobs/api";
import CircularProgress from "@mui/material/CircularProgress";
import MuiAlert from "@mui/material/Alert";

const ListJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tableData, setTableData] = useState([]);
  const [filteredTableContent, setFilteredTableContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getJobsByDomainId("d598e974-d7ed-4994-a2dd-2e3fdf410c2e")
      .then((response) => {
        const jobData = response.data;
        setFilteredTableContent(response.data);
        setTableData(response.data);
        const newData = jobData.map((item) => ({
          id: item.id,
          title: item.title,
          location: item.location,
        }));
        setTableData(newData);
        setFilteredTableContent(newData);
      })
      .catch((error) => {
        setError(error);
        setIsSnackbarOpen(true);
        setSnackbarMessage("An error occurred. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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

  const handleEdit = (id) => {
    navigate(`/jobs/${id}`);
  };

  const handleDelete = (id) => {
    const delObj = { id };
    deleteJob(delObj)
      .then((response) => {
        let newData = filteredTableContent.filter((item) => {
          return item.id !== id;
        });
        setFilteredTableContent(newData);
        setIsSnackbarOpen(true);
        setSnackbarMessage("Job deleted successfully!");
      })
      .catch((error) => {
        setError(error);
        setIsSnackbarOpen(true);
        setSnackbarMessage("An error occurred. Please try again later.");
      });
  };

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
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
            maxWidth: "95%",
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
                color: "#641C36",
                margin: "20px",
                marginTop: "55px",
                textAlign: "left",
              }}
            >
              Published Jobs
            </Typography>

            {loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px",
                }}
              >
                <CircularProgress />
              </Box>
            ) : filteredTableContent.length === 0 ? (
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

            <Snackbar
              open={isSnackbarOpen}
              autoHideDuration={3000}
              onClose={handleSnackbarClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MuiAlert
                elevation={6}
                variant="filled"
                onClose={handleSnackbarClose}
                severity="error"
              >
                {snackbarMessage}
              </MuiAlert>
            </Snackbar>
          </Container>
        </Box>
      </center>
    </Box>
  );
};

export default ListJobs;
