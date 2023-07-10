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
import { getAllMembers } from "@services/Members/api";
import { memberHeadingData } from "@utils/tableHeadings";
import { deleteMember } from "../../../services/Members/api";

const MembersList = () => {
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
    getAllMembers().then((response) => {
      console.log("response on members is ", response.data);
      const membersData = response.data;
      const newData = membersData.map((item: any) => {
        return {
          id: item.id,
          fullName: item.fullName,
          position: item.position,
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
    navigate(`/employees/${id}`);
  };

  const handleDelete = (id: any) => {
    console.log("Delete the entry", id);
    const delObj = { id };
    deleteMember(delObj).then((response) => {
      console.log("response from delete is ", response);

      let newData = filteredTableContent.filter((item) => {
        return item.id !== id;
      });
      setFilteredTableContent(newData);
    });
  };

  const filterTableContent = (term) => {
    const filteredData = tableData.filter(
      (item) =>
        item.fullName.toLowerCase().includes(term.toLowerCase()) ||
        item.position.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredTableContent(filteredData);
  };

  return (
    <Box sx={{ mb: 5 }}>
      <Header title="Members" />
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
              <Link to="/employees/new">
                <AddButton title="Add New Member" />
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
              Members
            </Typography>
            {filteredTableContent.length === 0 ? (
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                No records are found!
              </Typography>
            ) : (
              <CommonTable
                path="/employees"
                tableContent={filteredTableContent}
                tableHeadingData={memberHeadingData}
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

export default MembersList;
