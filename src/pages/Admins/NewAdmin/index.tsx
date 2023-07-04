import { Box, Typography, TextField, styled } from "@mui/material";


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

const AddAdmin = () => {
  return (
    <Box sx={{minWidth: '300px', margin: "auto auto", backgroundColor: '#FFF', borderRadius: ''}}>
      <Typography variant="h6" sx={{textAlign: 'center', color: '641C36', fontFamily: "Poppins"}}>
        Register Admin
        </Typography>
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
    </Box>
  );
}

export default AddAdmin;