import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import edit from "../../assets/edit.svg";
import deletes from "../../assets/delete.svg";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

const CommonTable = (props: any) => {
  const { tableContent, tableHeadingData, path, onEdit, onDelete } = props;
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const pageCount = Math.ceil(tableContent.length / rowsPerPage);

  const handlePageChange = (newPage: any) => {
    setPage(newPage);
  };
  // edit case
  // const handleEdit = (id: any) => {
  //   console.log(id, path);
  //   navigate(`${path}/${id}`);
  // };

  // delete case
  const handleDelete = (id: any) => {
    console.log("id", id);
  };

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {/* Heading */}
          <TableHead>
            <TableRow>
              {Object.values(tableHeadingData).map(
                (heading: any, index: any) => (
                  <TableCell key={index} sx={{ fontWeight: 600 }}>
                    {heading}
                  </TableCell>
                )
              )}
              <TableCell
                sx={{ fontWeight: 600, marginRight: "20px" }}
                align="center"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          {/* Table body content */}
          <TableBody>
            {tableContent
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((content: any, index: any) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {Object.entries(content).map(([key, value], index) => {
                    if (key !== "id") {
                      return (
                        <TableCell key={index} component="td" scope="row">
                          {value}
                        </TableCell>
                      );
                    }
                    return null;
                  })}
                  <TableCell align="center" sx={{ marginRight: 0 }}>
                    <img
                      style={{ cursor: "pointer" }}
                      src={edit}
                      alt=""
                      onClick={() => onEdit(content.id)}
                    />
                    <img
                      src={deletes}
                      alt=""
                      // onClick={() => handleDelete(content.id)}
                      style={{ marginLeft: "12px", cursor: "pointer" }}
                      onClick={() => onDelete(content.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Stack spacing={2}>
          <Pagination
            count={pageCount}
            variant="outlined"
            shape="rounded"
            sx={{ mt: 2 }}
            page={page + 1}
            onChange={(event, newPage) => handlePageChange(newPage - 1)}
          />
        </Stack>
      </Box>
    </>
  );
};

export default CommonTable;
