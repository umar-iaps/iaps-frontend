import { useState } from 'react';
import Layout from '../../components/Layout';
import { Box, Container, Grid, TextField, Typography, Button } from '@mui/material';
import LoginImage from '../../assets/login-side.png';
import logo from '../../assets/iaps-logo.png';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(() => ({
  backgroundColor: 'white',
  height: '715px',
  borderRadius: '0px 60px 60px 0px',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '26px',
  background: '#C64B68',
  width: '189px',
  padding: '8px 24px 8px 20px',
  height: '44px',
  color: '#FFF',
  '&:hover': {
    background: '#C64B68',
  },
  margin: 'auto',
  display: 'block',
  maxWidth: '368px',
  '& .MuiInputBase-input': {
    padding: '13.5px 14px',
  },
}));

const StyledBoxInside = styled(Box)(() => ({
  margin: 'auto',
  display: 'block',
  textAlign: 'center',
  color: 'black',
  padding: '9px',

  // backgroundColor: '#aaa',
}));
const StyledInputField = styled(Box)(() => ({
  margin: 'auto',
  display: 'block',
  color: 'black',
  padding: '9px',
  maxWidth: '368px',
  '& .MuiInputBase-input': {
    padding: '13.5px 14px',
  },
}));

const StyledTypography = styled(Typography)(() => ({
  color: '#641C36',
  fontSize: '48px',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '600',
  letterSpacing: '-0.48px',

}));

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  return isLogin ? (
    <Layout>
      Hi, I am a child component
    </Layout>
  ) : (
    <section style={{ backgroundColor: '#641C36', width: '100%', minHeight: '100vh', color: 'white' }}>
      <Box sx={{ padding: '44px 0px 44px 0px', maxWidth: '100%', margin: '0px 50px' }}>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img src={LoginImage} width="100%" height={750} alt="" />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ transform: 'translate(-18px, 9px)' }}>
            <StyledBox>
              <StyledBoxInside>
                <img src={logo} width={100} height={44} alt="" style={{ marginTop: '100px' }} />
                <StyledTypography variant="h4">
                  Hello, Welcome back!
                </StyledTypography>
              </StyledBoxInside>
              <StyledInputField ><br />
                <Typography variant="h6" sx={{ fontSize: '14px', color: '#333', fontWeight: '600' }}>
                  Email
                </Typography>
                <TextField
                  type="email"
                  fullWidth
                  placeholder="Enter your email"
                  id="fullWidth"
                  sx={{ height: '45px' }}
                />
              </StyledInputField>

              <StyledInputField mt={3} >
                <Typography variant="h6" sx={{ fontSize: '14px', color: '#333', fontWeight: '600', marginTop: '13px' }}>
                  Password
                </Typography>
                <TextField
                  type="password"
                  fullWidth
                  placeholder="Enter your password"
                  id="fullWidth"
                />
              </StyledInputField>
              <br />
              <StyledButton  variant="contained" sx={{ textTransform: 'none' }}>Login</StyledButton>

            </StyledBox>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Login;