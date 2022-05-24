import { Button, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

const EndPurchaseButton = ({ sx }: Props) => {
  return (
    <Button
      variant="contained"
      sx={[
        {
          width: "127px",
          height: "58px",
          fontSize: "20px",
          borderRadius: "23px",
          border: "4px solid white",
          backgroundColor: "#4D1BF8",
          "&:hover": { backgroundColor: "#4D1BF8" },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      סיום קניה
    </Button>
  );
};

export default EndPurchaseButton;
