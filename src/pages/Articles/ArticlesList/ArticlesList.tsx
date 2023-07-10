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
import { getAllArticles } from "@services/Articles/api";
import { articleHeadingData } from "@utils/tableHeadings";
import { deleteArticle } from "../../../services/Articles/api";

const ArticlesList = () => {
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
    getAllArticles().then((response) => {
      console.log("All Articles", response.data);
      const articleData = response.data;
      const newData = articleData.map((item) => {
        return {
          id: item.id,
          title: item.title,
          countries: item.countries[0] || "N/A",
          createdBy: item.createdBy,
          createdDate: new Date(item.createdDate).toLocaleDateString(),
        };
      });
      setTableData(newData);
      setFilteredTableContent(newData);
    });
  }, []);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    filterTableContent(term);
  };
  const handleEdit = (id: any) => {
    navigate(`/articles/${id}`);
  };

  const handleDelete = (id: any) => {
    console.log("Delete the entry", id);
    const delObj = { id };
    deleteArticle(delObj).then((response) => {
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
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.createdBy.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredTableContent(filteredData);
  };

  return (
    <Box sx={{ mb: 5 }}>
      {/* header */}
      <Header title="Articles" />
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
              {/* Button */}
              <Link to="/articles/new">
                <AddButton title="Add New Article" />
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
              Published Articles
            </Typography>
            {/* table */}
            {filteredTableContent.length === 0 ? (
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                No records are found!
              </Typography>
            ) : (
              <CommonTable
                path="/articles"
                tableContent={filteredTableContent}
                tableHeadingData={articleHeadingData}
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

export default ArticlesList;
