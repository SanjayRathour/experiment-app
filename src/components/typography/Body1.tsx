import { Typography } from "@mui/material";
import { ReactNode } from "react";

const Body1 = ({ text }: { text: ReactNode }) => {
  return (
    <Typography variant="body1" sx={{ fontSize: 19 }}>
      {text}
    </Typography>
  );
};

export default Body1;
