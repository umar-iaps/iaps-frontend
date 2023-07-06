import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import LoginImage from "../../assets/login-side.png";
import logo from "../../assets/iaps-logo.png";
import Layout from "../../components/Layout";
import {
  StyledBox,
  StyledBoxInside,
  StyledButton,
  StyledInputField,
  StyledTextField,
  StyledTypography,
} from "./style";
import { login } from "../../services/Accounts/api";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [credentials, setCredentials] = useState({});
  const [loginError, setLoginError] = useState(false);

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredentials((set) => {
      return { ...set, [name]: value };
    });
  };

  const handleLogin = () => {
    setLoginError(true);
    login(credentials)
      .then((response: any) => {
        console.log("response is ", response);
        localStorage.setItem("token", "83");
      })
      .catch((error: any) => {
        setLoginError(true);
      });
  };

  return isLogin ? (
    <Layout>Hi, I am a child component</Layout>
  ) : (
    <section
      style={{
        backgroundColor: "#641C36",
        width: "100%",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Box
        sx={{
          padding: "44px 0px 44px 0px",
          maxWidth: "100%",
          margin: "0px 50px",
        }}
      >
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img src={LoginImage} width="100%" height={750} alt="" />
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            sx={{ transform: "translate(-18px, 9px)" }}
          >
            <StyledBox>
              <StyledBoxInside>
                <img
                  src={logo}
                  width={100}
                  height={44}
                  alt=""
                  style={{ marginTop: "100px" }}
                />
                <StyledTypography variant="h4">
                  Hello, Welcome back!
                </StyledTypography>
              </StyledBoxInside>
              <StyledInputField>
                <br />
                <Typography
                  variant="h6"
                  sx={{ fontSize: "14px", color: "#333", fontWeight: "600" }}
                >
                  Email
                </Typography>
                <StyledTextField
                  type="email"
                  name="email"
                  fullWidth
                  placeholder=" Enter your email"
                  id="fullWidth"
                  sx={{ height: "45px" }}
                  inputProps={{
                    style: { caretColor: "#2A85FF" },
                  }}
                  onChange={handleChange}
                />
              </StyledInputField>

              <StyledInputField mt={3}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    color: "#333",
                    fontWeight: "600",
                    marginTop: "13px",
                  }}
                >
                  Password
                </Typography>
                <StyledTextField
                  type="password"
                  name="password"
                  fullWidth
                  placeholder=" Enter your password"
                  id="fullWidth"
                  inputProps={{
                    style: { caretColor: "#2A85FF" },
                  }}
                  onChange={handleChange}
                />
              </StyledInputField>
              <br />
              <StyledButton
                variant="contained"
                sx={{ textTransform: "none" }}
                onClick={handleLogin}
              >
                Login
              </StyledButton>
              {loginError && (
                <Typography
                  variant="h6"
                  sx={{
                    marginTop: "20px",
                    fontSize: "14px",
                    color: "#333",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  Wrong Credentials
                </Typography>
              )}
            </StyledBox>
          </Grid>
        </Grid>
        );
      </Box>
    </section>
  );
};

export default Login;
