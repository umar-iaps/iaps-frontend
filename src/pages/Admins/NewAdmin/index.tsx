import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Header from "../../../components/Topbar/Header.js";
import { StyledInputField, StyledTextField } from "./style.ts";
import useStyles from "./style.ts";

const AddAdmin = () => {
  const classes = useStyles();

  return (
    <>
      {/* header */}
      <Header title="Admin" />
      <section style={{ marginTop: "90px", marginBottom: "66px" }}>
        <Container>
          <Grid container>
            <Grid item lg={12} xs={12}>
              <Box className={classes.main}>
                <Box className={classes.article}>
                  <Typography variant="h4">
                    <span className={classes.title}>Register Admin</span>
                  </Typography>
                </Box>

                <StyledInputField>
                  <br />
                  <Typography variant="h6" className={classes.label}>
                    <span className={classes.label}>Full Name</span>
                  </Typography>
                  <StyledTextField
                    type="text"
                    fullWidth
                    placeholder=" Enter your first name"
                    id="fullWidth"
                    sx={{ height: "45px" }}
                    inputProps={{
                      style: { caretColor: "#2A85FF" },
                    }}
                  />
                </StyledInputField>
                {/* email */}
                <StyledInputField>
                  <br />
                  <Typography variant="h6">
                    <span className={classes.label}> Email</span>
                  </Typography>
                  <StyledTextField
                    type="email"
                    fullWidth
                    placeholder=" Enter your email"
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
                      fontWeight: "600",
                      marginTop: "0px",
                    }}
                  >
                    &nbsp; <span className={classes.label}>Domains</span>
                  </Typography>

                  <FormControl sx={{ m: 1, minWidth: "100%" }} size="small">
                    <InputLabel
                      id="demo-select-small-label"
                      style={{ color: "#aaa" }}
                    >
                      Select a domain...
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
                  &nbsp;{" "}
                  <Button
                    sx={{ textTransform: "capitalize" }}
                    variant="contained"
                    className={classes.btns}
                  >
                    Add Admin{" "}
                  </Button>
                </StyledInputField>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default AddAdmin;
