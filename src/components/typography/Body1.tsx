import { SxProps, Typography } from "@mui/material";

const style = {
  fontSize: 19,
  fontFamily: "inherit",
  color: "black",
};

const Body1 = ({ text, sx }: { text: string; sx?: SxProps }) => {
  return <Typography sx={{ ...style, ...sx }}>{text}</Typography>;
};

export default Body1;
