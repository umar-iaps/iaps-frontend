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
import { useEffect, useState } from "react";
import {
  addProject,
  getProjectById,
  updateProject,
} from "../../../services/Projects/api.ts";
import { getAllCountries } from "../../../services/Countries/api.ts";
import { getAllSectors } from "../../../services/Sectors/api.ts";
import { getAllDomains } from "../../../services/Domains/api.ts";

const AddProject = () => {
  const classes = useStyles();
  const params = useParams();
  // const [domainData, setDomainData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [data, setData] = useState({});
  const [files, setFiles] = useState([]);
  const [domains, setDomains] = useState([]);

  console.log(data);

  useEffect(() => {
    getAllCountries().then((response) => {
      console.log("response is ", response);
      setCountries(response.data);
    });

    getAllSectors().then((response) => {
      console.log("Sectors is ", response.data);
      setSectors(response.data);
    });
    getProjectById(params?.id).then((response) => {
      console.log("project data by id is ", response.data);
      setData(response.data);
    });
    getAllDomains().then((response) => {
      setDomains(response.data);
    });
  }, []);

  const handleChange = (e: any) => {
    const name = e.target.name;
    let value = e.target.value;
    let newArr: any = [];
    if (name == "countries") {
      let value1 = countries.filter((item) => {
        return item?.name == value;
      });
      console.log(value1[0].id);

      value = [...newArr, value1[0].id];
    } else if (name == "sectors") {
      let value1 = sectors.filter((item) => {
        return item?.name == value;
      });
      console.log(value1[0].id);

      value = [...newArr, value1[0].id];
    } else if (name == "images") {
      console.log("filw", e.target.files[0]);
      if (!!files.length) setFiles((prev) => [...prev, e.target.files[0]]);
      else setFiles(e.target.files[0]);
      let value1 = e.target.files[0];
      value = [...newArr, value1];
      console.log("Image values is ", value);
    }
    setData((set) => {
      return { ...set, [name]: value };
    });
  };
  console.log(data, sectors);
  const publishProject = () => {
    if (params.id) {
      updateProject();
    } else {
      let formData = new FormData();
      formData.append("Title", data?.title);
      formData.append("Body", data?.body);
      formData.append("ImageFiles", files);
      formData.append("Domains", domains);
      formData.append("Sectors", data?.sectors);
      console.log(formData, data);
      addProject(formData).then((response) => {
        console.log("Adding response is ", response);
      });
    }
  };

  return (
    <>
      {/* Header */}
      <Header title="Projects" />
      <center>
        <Box style={{ marginTop: "10px", marginBottom: "66px" }}>
          <Container>
            <Grid container>
              <Grid item lg={12} xs={12}>
                <Box className={classes.main}>
                  <Box className={classes.article}>
                    <Typography variant="h4">
                      {params.id ? (
                        <span className={classes.title}>Edit Project</span>
                      ) : (
                        <span className={classes.title}>Add Project</span>
                      )}
                    </Typography>
                    <Link to="/projects">
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
                      value={data?.title}
                      onChange={handleChange}
                      type="text"
                      name="title"
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
                      name="body"
                      onChange={handleChange}
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
                  {/* country */}
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
                      <span className={classes.title2}>
                        &nbsp;&nbsp; Country
                      </span>
                    </Typography>

                    <FormControl sx={{ m: 1, minWidth: 455 }} size="small">
                      <InputLabel
                        id="demo-select-small-label"
                        sx={{ color: "#999999" }}
                      >
                        Select a Country...
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        name="countries"
                        value={data?.countries}
                        onChange={handleChange}
                        id="demo-select-small"
                        label="Age"
                        sx={{ borderRadius: "35px" }}
                      >
                        {countries.map((option) => (
                          <MenuItem key={option?.id} value={option?.name}>
                            {option?.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </StyledInputField>
                  {/* Sectors */}
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
                      <span className={classes.title2}>
                        &nbsp;&nbsp; Sectors
                      </span>
                    </Typography>

                    <FormControl sx={{ m: 1, minWidth: 455 }} size="small">
                      <InputLabel
                        id="demo-select-small-label"
                        sx={{ color: "#999999" }}
                      >
                        Select a Sector...
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        name="sectors"
                        value={data?.sectors}
                        onChange={handleChange}
                        // label="Age"
                        sx={{ borderRadius: "35px" }}
                      >
                        {sectors.map((option) => (
                          <MenuItem key={option?.id} value={option?.name}>
                            {option?.name}
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
                        marginTop: "15px",
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
                        <input
                          hidden
                          accept="image/*"
                          name="images"
                          onChange={handleChange}
                          multiple
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
                        &nbsp; Preview Project
                      </StyledButton>
                      <StyledButton
                        variant="contained"
                        onClick={publishProject}
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
                          <> Update Project </>
                        ) : (
                          <> Publish Project </>
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

export default AddProject;
