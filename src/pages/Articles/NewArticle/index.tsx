import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import useStyles from "./style.ts";
import avator from "@assets/Avatar.svg";
import upload from "@assets/Group 15.png";
import publish from "@assets/publish.svg";
import view from "@assets/view.svg";
import Header from "@components/Topbar/Header.tsx";
import { Link, useParams } from "react-router-dom";
import {
  StyledButton,
  StyledInputField,
  StyledTextField,
  StyledTextarea,
} from "./style.ts";
import { useState, useEffect } from "react";

import { getAllCountries } from "../../../services/Countries/api.ts";
import { getArticleById } from "../../../services/Articles/api.ts";

const domainData = [
  { value: "", label: "None" },
  { value: 10, label: "Domain" },
  { value: 20, label: "Domain1" },
  { value: 30, label: "Domain2" },
];

const AddArticle = () => {
  const classes = useStyles();
  const params = useParams();
  const [countries, setCountries] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    getAllCountries().then((response) => {
      console.log("response is ", response);
      setCountries(response.data);
    });
    getArticleById(params?.id).then((response) => {
      setData(response.data.dataResult);
    });
  });

  return (
    <>
      <Header title="Articles" />
      <center>
        <Box style={{ marginTop: "30px", marginBottom: "66px" }}>
          <Container>
            <Grid container>
              <Grid item lg={12} xs={12}>
                <Box className={classes.main}>
                  <Box className={classes.article}>
                    <Typography variant="h4">
                      {params.id ? (
                        <span className={classes.title}> Edit Article</span>
                      ) : (
                        <span className={classes.title}> New Article</span>
                      )}
                    </Typography>
                    <Link to="/articles">
                      <img src={avator} alt="" width={45} />
                    </Link>
                  </Box>

                  <StyledInputField>
                    <br />
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "14px",
                        color: "#333",
                        textAlign: "left",
                        fontWeight: "600",
                      }}
                    >
                      <span className={classes.title2}>Title</span>
                    </Typography>
                    <StyledTextField
                      type="text"
                      value={data?.title}
                      fullWidth
                      placeholder=" Enter a title"
                      id="fullWidth"
                      sx={{ height: "45px" }}
                      inputProps={{
                        style: { caretColor: "#2A85FF" },
                      }}
                    />
                  </StyledInputField>

                  <StyledInputField>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "14px",
                        color: "#333",
                        textAlign: "left",
                        fontWeight: "600",
                        marginTop: "26px",
                      }}
                    >
                      <span className={classes.title2}>Body</span>
                    </Typography>

                    <StyledTextarea
                      minRows={8}
                      placeholder="Enter article body..."
                      value={data?.body}
                      sx={{
                        width: "100%",
                        padding: "13.5px 14px",
                        "&:focus": {
                          borderRadius: "5px",
                          border: "2px solid #CCC",
                          background: "#F2F2F2",
                        },
                      }}
                    />
                  </StyledInputField>
                  <StyledInputField>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "14px",
                        color: "#333",
                        textAlign: "left",
                        fontWeight: "600",
                        marginTop: "12px",
                      }}
                    >
                      <span className={classes.title2}>
                        &nbsp;&nbsp; Country
                      </span>
                    </Typography>

                    <FormControl sx={{ m: 1, minWidth: 455 }} size="small">
                      <InputLabel
                        id="demo-select-small-label"
                        sx={{ color: "#999999" }}
                      >
                        Select a country
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Age"
                        sx={{ borderRadius: "35px" }}
                      >
                        {countries.map((option) => (
                          <MenuItem key={option.id} value={option.name}>
                            {option.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </StyledInputField>

                  <StyledInputField>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "14px",
                        color: "#333",
                        textAlign: "left",
                        fontWeight: "600",
                        marginTop: "10px",
                      }}
                    >
                      <span className={classes.title2}> Picture</span>
                    </Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={2}
                      className={classes.uploadImage}
                      sx={{ justifyContent: "center" }}
                    >
                      <Button
                        variant="contained"
                        component="label"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          boxShadow: "none",
                          backgroundColor: "transparent",
                          color: "#999",
                          textTransform: "capitalize",
                        }}
                      >
                        <Box className={classes.imageHeight}>
                          <img src={upload} alt="" />
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "14px",
                            color: "#999",
                            fontWeight: "600",
                            marginTop: "15px",
                            textAlign: "center",
                          }}
                        >
                          Upload your images here
                        </Typography>
                        <input hidden accept="image/*" multiple type="file" />
                      </Button>
                    </Stack>{" "}
                    <br />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "40px",
                      }}
                    >
                      <StyledButton
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          backgroundColor: "#B9B9B9",
                        }}
                      >
                        <img
                          style={{ transform: "translate(5px, 4px)" }}
                          src={view}
                          alt="preview"
                        />{" "}
                        &nbsp; Preview Article
                      </StyledButton>
                      <StyledButton
                        variant="contained"
                        sx={{ textTransform: "none" }}
                      >
                        <img
                          style={{
                            transform: "translate(5px, 4px)",
                            height: "21px",
                          }}
                          src={publish}
                          alt="preview"
                        />{" "}
                        &nbsp;{" "}
                        {params.id ? (
                          <> Update Article </>
                        ) : (
                          <> Publish Article </>
                        )}
                      </StyledButton>
                    </Box>
                  </StyledInputField>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </center>
    </>
  );
};

export default AddArticle;
