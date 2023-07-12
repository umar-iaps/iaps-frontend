import React, { useEffect, useState } from "react";
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
  CircularProgress,
  Snackbar,
} from "@mui/material";
import {
  StyledButton,
  StyledInputField,
  StyledTextField,
  StyledTextarea,
} from "./style.ts";
import useStyles from "./style.ts";
import avator from "@assets/icons/Avatar.svg";
import upload from "@assets/images/Group 15.png";
import publish from "@assets/icons/publish.svg";
import view from "@assets/icons/view.svg";
import Header from "@components/Topbar/Header.tsx";
import { Link, useParams, useNavigate } from "react-router-dom";
import { addMember, getMemberById } from "@services/Members/api.ts";
import { getAllDomains } from "@services/Domains/api.ts";
import MuiAlert from "@mui/material/Alert";

const AddEmployees = () => {
  const classes = useStyles();
  const params = useParams();
  const navigate = useNavigate();
  const [domains, setDomains] = useState([]);
  const [data, setData] = useState({});
  const [newData, setNewData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  useEffect(() => {
    Promise.all([getAllDomains(), getMemberById(params?.id)])
      .then(([domainsResponse, memberResponse]) => {
        setDomains(domainsResponse.data);
        setData(memberResponse.data.dataResult);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [params?.id]);

  const handleChange = (e) => {
    if (params?.id) {
      let newData = { ...data };
    }
    const name = e.target.name;
    let value = e.target.value;
    if (name === "image") {
      value = e.target.files[0];
    }
    if (name === "Domains") {
      // const selectedItem = domains.filter((item) => item.name === value);
    }
    setNewData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const publishMember = () => {
    let formData = new FormData();
    formData.append("FullName", newData.fullName);
    formData.append("Position", newData.position);
    formData.append("Bio", newData.bio);
    formData.append("ImageFile", newData.image);
    formData.append("Domains", newData.domains);
    addMember(formData).then((response) => {
      setIsSnackbarOpen(true);
      // navigate("/employees");
    });
  };

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <Header title="Members" />
      <center>
        <Box style={{ marginTop: "40px", marginBottom: "66px" }}>
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
                      sx={{
                        fontSize: "14px",
                        color: "#333",
                        textAlign: "left",
                        fontWeight: "600",
                      }}
                    >
                      <span className={classes.title2}>Full name</span>
                    </Typography>
                    <StyledTextField
                      type="text"
                      fullWidth
                      value={data?.fullName}
                      onChange={handleChange}
                      name="fullName"
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
                      sx={{
                        fontSize: "14px",
                        color: "#333",
                        textAlign: "left",
                        fontWeight: "600",
                      }}
                    >
                      <span className={classes.title2}>Position</span>
                    </Typography>
                    <StyledTextField
                      type="text"
                      value={data?.position}
                      onChange={handleChange}
                      name="position"
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
                        textAlign: "left",
                        fontWeight: "600",
                        marginTop: "26px",
                      }}
                    >
                      <span className={classes.title2}>Bio</span>
                    </Typography>

                    <StyledTextarea
                      minRows={8}
                      placeholder="Enter bio..."
                      value={data?.bio}
                      onChange={handleChange}
                      name="bio"
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
                        marginTop: "16px",
                      }}
                    >
                      <span className={classes.title2}>Domain</span>
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
                        onChange={handleChange}
                        name="domains"
                        label="Age"
                        sx={{ borderRadius: "35px", textAlign: "left" }}
                      >
                        {domains?.map((option) => (
                          <MenuItem key={option.id} value={option.id}>
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
                      <span className={classes.title2}>Picture</span>
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
                        <input
                          hidden
                          onChange={handleChange}
                          name="image"
                          accept="image/*"
                          type="file"
                        />
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
                        &nbsp; Preview Member
                      </StyledButton>
                      <StyledButton
                        variant="contained"
                        sx={{ textTransform: "none" }}
                        onClick={publishMember}
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
                        {params.id ? <>Update Member</> : <>Publish Member</>}
                      </StyledButton>
                    </Box>
                  </StyledInputField>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </center>

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
          severity="success"
        >
          {params.id
            ? "Member updated successfully!"
            : "Member added successfully!"}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default AddEmployees;
