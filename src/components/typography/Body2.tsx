import { Typography } from "@mui/material";
import { ReactNode } from "react";

const Body2 = ({ text }: { text: ReactNode }) => {
  return <Typography sx={{ fontSize: 16 }}>{text}</Typography>;
};

export default Body2;
