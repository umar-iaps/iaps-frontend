import { useState, useEffect } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ButtonGroup, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CommonTable from "@components/Table";
import AddButton from "@components/AddButton";
import Header from "@components/Topbar/Header";
import { StyledIcon, StyledSearch } from "./style";
import { getAllReports } from "@services/Reports/api";
import { reportHeadingData } from "@utils/tableHeadings";
import { deleteReport } from "../../../services/Reports/api";

const domainData = [
  { value: "", label: "None" },
  { value: 10, label: "Domain" },
  { value: 20, label: "Domain1" },
  { value: 30, label: "Domain2" },
];

const ReportsList = () => {
  const [tableData, setTableData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTableContent, setFilteredTableContent] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm == "") {
      setFilteredTableContent(tableData);
    }
  }, [searchTerm]);

  useEffect(() => {
    getAllReports().then((response) => {
      console.log("response on reports is ", response.data);
      const reportsData = response.data;
      const newData = reportsData.map((item: any) => {
        return {
          id: item.id,
          title: item.title,
          expertize: item.expertize,
          sectors: item.sectors[0] || "N/A",
          regions: item.regions[0]?.name ? item.regions[0]?.name : "N/A",
          year: item.year,
        };
      });
      setTableData(newData);
      setFilteredTableContent(newData);
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterTableContent(event.target.value);
  };

  const handleEdit = (id: any) => {
    navigate(`/reports/${id}`);
  };

  const handleDelete = (id: any) => {
    console.log("Delete the entry", id);
    const delObj = { id };
    deleteReport(delObj).then((response) => {
      console.log("response from delete is ", response);
    });
  };

  const filterTableContent = (term) => {
    const filteredData = tableData.filter(
      (item) =>
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.expertize.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredTableContent(filteredData);
  };

  return (
    <Box sx={{ mb: 5 }}>
      <Header title="Reports" />
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
                <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
                  <InputLabel
                    id="demo-select-small-label"
                    sx={{ color: "#999999" }}
                  >
                    Select a domain
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
                <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
                  <InputLabel
                    id="demo-select-small-label"
                    sx={{ color: "#999999" }}
                  >
                    Filter by Year
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
              <Link to="/reports/new">
                <AddButton title="Add New Report" />
              </Link>
            </ButtonGroup>
            <Box sx={{ textAlign: "left" }}>
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
                margin: "10px",
                marginTop: "33px",
              }}
            >
              Published Reports
            </Typography>
            {filteredTableContent.length === 0 ? (
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                No records are found!
              </Typography>
            ) : (
              <CommonTable
                path="/reports"
                tableContent={filteredTableContent}
                tableHeadingData={reportHeadingData}
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

export default ReportsList;
