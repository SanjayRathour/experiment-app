import { Box, Theme, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  dir?: string;
  ai?: string;
  jc?: string;
  props?: any;
  children: ReactNode;
  sx?: SxProps<Theme>;
}

const FlexBox = ({
  dir = "row",
  ai = "center",
  jc = "center",
  props,
  sx,
  children,
}: Props) => {
  return (
    <Box
      sx={[
        {
          display: "flex",
          alignItems: ai,
          justifyContent: jc,
          flexDirection: dir,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {children}
    </Box>
  );
};

export default FlexBox;
