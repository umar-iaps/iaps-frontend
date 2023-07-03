import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { LayoutProps } from '../../interfaces/LayoutProps';

const StyledAppBar = styled(AppBar)(() => ({
  position: 'static',
  width: '100%',
  padding: '15px 18px',
  background: '#FCFCFC',
  boxShadow: 'inset 1px 0px 0px #F4F4F4',
}));

const StyledTitle = styled(Typography)(() => ({
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '28px',
  lineHeight: '24px',
  color: '#641C36',
}));

const StyledSearchBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '8px 42px 8px 8px',
  gap: '10px',
  background: '#F4F4F4',
  borderRadius: '12px',
  marginRight: '33px',
}));

const StyledSearchIcon = styled(SearchIcon)(() => ({
  width: '24px',
  height: '24px',
  flex: 'none',
  color: '#9A9FA5',
  order: 0,
  flexGrow: 0,
}));

const StyledRightBlock = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '0px',
  gap: '20px',
  width: '185px',
  height: '48px',
  flex: 'none',
  order: 2,
  flexGrow: 0,
}));

const StyledLedianShera = styled(Typography)(() => ({
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '18px',
  lineHeight: '24px',
  textAlign: 'right',
  letterSpacing: '-0.01em',
  color: '#641C36',
  marginRight: '0px',
}));

const StyledAvatar = styled(Box)(() => ({
  boxSizing: 'border-box',
  width: '48px',
  height: '48px',
  background: '#C64B68',
  border: '2px solid #641C36',
  borderRadius: '48px',
  flex: 'none',
  order: 1,
  flexGrow: 0,
}));

const Topbar = ({ children }: LayoutProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <StyledAppBar>
        <Toolbar>
          <Box display="flex" alignItems="center">
            <StyledTitle variant="h6">
              Dashboard
            </StyledTitle>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="flex-end" flexGrow={1}>
            <StyledSearchBox>
              <TextField
                variant="standard"
                size="small"
                placeholder="Search or type something"
                InputProps={{
                  disableUnderline: true,
                  startAdornment: <StyledSearchIcon />,
                  sx: {
                    fontFamily: 'Poppins',
                    fontWeight: '500',
                    fontSize: '12px',
                    lineHeight: '24px',
                    letterSpacing: '-0.01em',
                    color: '#9A9FA5',
                    flex: 'none',
                    order: 1,
                    flexGrow: 0,
                  },
                }}
              />
            </StyledSearchBox>
            <StyledRightBlock>
              <StyledLedianShera variant="body1">
                Ledian Shera
              </StyledLedianShera>
              <StyledAvatar></StyledAvatar>
            </StyledRightBlock>
          </Box>
        </Toolbar>
      </StyledAppBar>
      {children}
    </div>
  );
};

export default Topbar;