import {Box} from '@mui/material';
const BoxComponent = ({width}: any, {height}: any, {children}: any) => {
  return (
    <Box width={width} height={height} sx={{margin: '40px auto',backgroundColor: "#FFF"}}>
        {children}
    </Box>
  )
}

export default BoxComponent;