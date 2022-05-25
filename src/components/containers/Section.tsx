import { Box, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";
import FlexBox from "./FlexBox";

interface Props {
  sx?: SxProps<Theme>;
  children: ReactNode;
}

const Section = ({ children, sx = { px: 5, pb: 25, pt: 4 } }: Props) => {
  return (
    <FlexBox>
      <Box
        dir="column"
        sx={[
          {
            maxWidth: "420px",
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        {children}
      </Box>
    </FlexBox>
  );
};

export default Section;
