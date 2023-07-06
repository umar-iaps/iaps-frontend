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
import avator from "../../../assets/Avatar.svg";
import upload from "../../../assets/Group 15.png";
import publish from "../../../assets/publish.svg";
import view from "../../../assets/view.svg";
import Header from "../../../components/Topbar/Header.tsx";
import { Link } from "react-router-dom";
import {
  StyledButton,
  StyledInputField,
  StyledTextField,
  StyledTextarea,
} from "./style.ts";

const AddJobs = () => {
  const classes = useStyles();

  return (
    <>
      <Header title="Jobs" />
      <section style={{ marginTop: "30px", marginBottom: "66px" }}>
        <Container>
          <Grid container>
            <Grid item lg={12} xs={12}>
              <Box className={classes.main}>
                <Box className={classes.article}>
                  <Typography variant="h4">
                    <span className={classes.title}>Add job</span>
                  </Typography>
                  <Link to="/jobs">
                    <img src={avator} alt="" width={45} />
                  </Link>
                </Box>

                <StyledInputField>
                  <br />
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "14px", color: "#333", fontWeight: "600" }}
                  >
                    <span className={classes.title2}>Location</span>
                  </Typography>
                  <StyledTextField
                    type="text"
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
                      fontWeight: "600",
                      marginTop: "26px",
                    }}
                  >
                    <span className={classes.title2}>Description</span>
                  </Typography>

                  <StyledTextarea
                    rows={8}
                    minRows={8}
                    placeholder="Enter article body..."
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
                      fontWeight: "600",
                      marginTop: "12px",
                    }}
                  >
                    <span className={classes.title2}>How to apply</span>
                  </Typography>
                  <StyledTextField
                    type="text"
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
                      fontWeight: "600",
                      marginTop: "22px",
                    }}
                  >
                    <span className={classes.title2}>Working hours</span>
                  </Typography>
                  <StyledTextField
                    type="text"
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
                      fontWeight: "600",
                      marginTop: "22px",
                    }}
                  >
                    <span className={classes.title2}>Responsibilities</span>
                  </Typography>
                  <StyledTextField
                    type="text"
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
                      fontWeight: "600",
                      marginTop: "22px",
                    }}
                  >
                    <span className={classes.title2}>Qualifications</span>
                  </Typography>
                  <StyledTextField
                    type="text"
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
                      fontWeight: "600",
                      marginTop: "22px",
                    }}
                  >
                    <span className={classes.title2}>&nbsp;&nbsp; Domains</span>
                  </Typography>

                  <FormControl sx={{ m: 1, minWidth: 455 }} size="small">
                    <InputLabel
                      id="demo-select-small-label"
                      sx={{ color: "#999999" }}
                    >
                      Select a domains
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
                </StyledInputField>

                <StyledInputField>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "14px",
                      color: "#333",
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
                      sx={{ textTransform: "none", backgroundColor: "#B9B9B9" }}
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
                      &nbsp; Publish Article
                    </StyledButton>
                  </Box>
                </StyledInputField>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default AddJobs;
