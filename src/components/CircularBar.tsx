import CircularProgress from "@mui/material/CircularProgress";
import FlexBox from "./containers/FlexBox";

const CircularBar = () => {
  return (
    <FlexBox sx={{ height: "70vh" }}>
      <CircularProgress sx={{ color: "#1579F2" }} />
    </FlexBox>
  );
};

export default CircularBar;
