import Items from "./Items";
import LogoImage from "../../assets/iaps-logo.png";
import { Box } from "@mui/material";

const Sidebar = () => {
  return (
    <Box
      sx={{
        display: "none",
        backgroundColor: "#641c36",
        color: "whitesmoke",
        minWidth: 340,
        maxWidth: 340,
        minHeight: "100vh",
      }}
    >
      <img
        src={LogoImage}
        alt="logo"
        style={{
          margin: "40px 0 0 20px",
          backgroundColor: "#FFF",
          borderRadius: "6px",
        }}
      />
      <Items />
    </Box>
  );
};

export default Sidebar;
