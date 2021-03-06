import { Button, SxProps } from "@mui/material";
import { MouseEventHandler } from "react";

interface Props {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  sx?: SxProps;
}

const PrimaryButton = ({ text, onClick, sx }: Props) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={[
        {
          width: "127px",
          height: "59px",
          fontSize: "20px",
          borderRadius: "23px",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
