import AddIcon from "@mui/icons-material/Add";
import { StyledButton } from "./style";

const AddButton = (props: any) => {
  return (
    <>
      <StyledButton
        variant="contained"
        startIcon={<AddIcon />}
        sx={{ textTransform: "none", mt: 2 }}
      >
        {" "}
        {props.title}
      </StyledButton>
    </>
  );
};

export default AddButton;
