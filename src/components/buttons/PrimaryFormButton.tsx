import { Button, SxProps } from "@mui/material";

interface Props {
  text: string;
  sx?: SxProps;
}

const PrimaryFormButton = ({ text, sx }: Props) => {
  return (
    <Button
      type="submit"
      variant="contained"
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

export default PrimaryFormButton;
