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
  StyledTypography,
} from "./style.ts";

const domainData = [
  { value: "", label: "None" },
  { value: 10, label: "Domain" },
  { value: 20, label: "Domain1" },
  { value: 30, label: "Domain2" },
];

const AddReports = () => {
  const classes = useStyles();
  const params = useParams();

  return (
    <>
      <Header title="Reports" />
      <center>
        <Box style={{ marginTop: "30px", marginBottom: "66px" }}>
          <Container>
            <Grid container>
              <Grid item lg={12} xs={12}>
                <Box className={classes.main}>
                  <Box className={classes.article}>
                    <Typography variant="h4">
                      {params.id ? (
                        <span className={classes.title}> Edit Report</span>
                      ) : (
                        <span className={classes.title}> Add Report</span>
                      )}
                    </Typography>
                    <Link to="/reports">
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
                    <StyledTypography variant="h6" sx={{ textAlign: "left" }}>
                      <span className={classes.title2}>Expertize</span>
                    </StyledTypography>

                    <StyledTextarea
                      minRows={8}
                      sx={{
                        width: "100%",
                        padding: "13.5px 14px",
                        "&:focus": {
                          borderRadius: "5px",
                          border: "2px solid #CCC",
                          background: "#F2F2F2",
                        },
                      }}
                      placeholder="Enter article expertize..."
                    />
                  </StyledInputField>
                  <StyledInputField>
                    <Typography variant="h6" sx={{ textAlign: "left" }}>
                      <span className={classes.title2}>Year</span>
                    </Typography>
                    <StyledTextField
                      type="text"
                      fullWidth
                      placeholder=" Enter a year"
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
                        marginTop: "17px",
                      }}
                    >
                      <span className={classes.title2}>
                        &nbsp;&nbsp; Domains
                      </span>
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
                        {domainData.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </StyledInputField>

                  <Grid container spacing={2}>
                    <Grid item lg={6}>
                      <StyledInputField>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "14px",
                            color: "#333",
                            textAlign: "left",
                            fontWeight: "600",
                            marginTop: "17px",
                          }}
                        >
                          <span className={classes.title2}>
                            &nbsp;&nbsp;&nbsp; Sectors
                          </span>
                        </Typography>

                        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                          <InputLabel
                            id="demo-select-small-label"
                            sx={{ color: "#999999" }}
                          >
                            Select a sector
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
                    </Grid>
                    <Grid item lg={6}>
                      <StyledInputField>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "14px",
                            color: "#333",
                            textAlign: "left",
                            fontWeight: "600",
                            marginTop: "17px",
                          }}
                        >
                          <span className={classes.title2}>
                            &nbsp;&nbsp;&nbsp; Regions
                          </span>
                        </Typography>

                        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                          <InputLabel
                            id="demo-select-small-label"
                            sx={{ color: "#999999" }}
                          >
                            Select a region
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
                    </Grid>
                  </Grid>

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
                      <span className={classes.title2}> Pdf file</span>
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
                          Upload your pdf file here
                        </Typography>
                        <input hidden accept="pdf/*" multiple type="file" />
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
                        &nbsp; Preview Report
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
                        />
                        &nbsp;{" "}
                        {params.id ? (
                          <> Update Report </>
                        ) : (
                          <> Publish Report </>
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

export default AddReports;
