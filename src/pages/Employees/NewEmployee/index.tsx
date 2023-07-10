import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
  InputLabel,
} from "@mui/material";
import {
  StyledButton,
  StyledInputField,
  StyledTextField,
  StyledTextarea,
} from "./style.ts";
import useStyles from "./style.ts";
import avator from "@assets/Avatar.svg";
import upload from "@assets/Group 15.png";
import publish from "@assets/publish.svg";
import view from "@assets/view.svg";
import Header from "@components/Topbar/Header.tsx";
import { Link, useParams } from "react-router-dom";

const domainData = [
  { value: "", label: "None" },
  { value: 10, label: "Domain" },
  { value: 20, label: "Domain1" },
  { value: 30, label: "Domain2" },
];

const AddEmployees = () => {
  const classes = useStyles();
  const params = useParams();
  console.log("id", params.id);

  return (
    <>
      <Header title="Members" />
      <section style={{ marginTop: "30px", marginBottom: "66px" }}>
        <Container>
          <Grid container>
            <Grid item lg={12} xs={12}>
              <Box className={classes.main}>
                <Box className={classes.article}>
                  <Typography variant="h4">
                    {params.id ? (
                      <span className={classes.title}> Edit Member</span>
                    ) : (
                      <span className={classes.title}> New Member</span>
                    )}
                  </Typography>
                  <Link to="/employees">
                    <img src={avator} alt="" width={45} />
                  </Link>
                </Box>

                <StyledInputField>
                  <br />
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "14px", color: "#333", fontWeight: "600" }}
                  >
                    <span className={classes.title2}>Full name</span>
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
                  <br />
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "14px", color: "#333", fontWeight: "600" }}
                  >
                    <span className={classes.title2}>Position</span>
                  </Typography>
                  <StyledTextField
                    type="text"
                    fullWidth
                    placeholder=" Enter a position"
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
                    <span className={classes.title2}>Bio</span>
                  </Typography>

                  <StyledTextarea
                    minRows={8}
                    placeholder="Enter bio..."
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
                      marginTop: "16px",
                    }}
                  >
                    <span className={classes.title2}>&nbsp;&nbsp; Domain</span>
                  </Typography>

                  <FormControl sx={{ m: 1, minWidth: 455 }} size="small">
                    <InputLabel
                      id="demo-select-small-label"
                      sx={{ color: "#999999" }}
                    >
                      Select a domain...
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
                      &nbsp; Preview Member
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
                      {params.id ? <> Update Member </> : <> Publish Member </>}
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

export default AddEmployees;
