import { useState } from "react";
import { Box } from "@mui/material";
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
const tableHeading = {
  Title: "Title",
  position: "Position",
};

const MembersList = () => {
  const [tableContent, setTableContent] = useState(tableData);
  const [tableHeadingData, setTableHeadingData] = useState(tableHeading);

  return (
    <section>
      <Header title="Members" />
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
              <StyledSearch
                placeholder="Search"
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
              width: "800px",
              color: "#641C36",
              margin: "20px",
              marginTop: "55px",
            }}
          >
            Members
          </Typography>
          {/* table */}
          <CommonTable
            tableContent={tableContent}
            tableHeadingData={tableHeadingData}
          />
        </Container>
      </Box>
    </section>
  );
};

export default MembersList;
