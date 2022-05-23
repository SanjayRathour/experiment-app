import { SxProps, Typography } from "@mui/material";

const style = {
  fontSize: 16,
  fontFamily: "inherit",
  lineHeight: "30px",
  color: "black",
};

const Body2 = ({ text, sx }: { text: string; sx?: SxProps }) => {
  return <Typography sx={{ ...style, ...sx }}>{text}</Typography>;
};

export default Body2;
