import { Box } from "@mui/material";

interface Props {
  type: string;
  props?: any;
  name: string;
  register: any;
}

const Input = ({ type, register, name }: Props) => {
  return (
    <Box
      sx={{
        "& input": {
          height: 38,
          px: 2,
          mb: 4,
          outline: "none",
          border: "1px solid #E0E0E0",
          borderRadius: "5px",
          "&:focus": { border: "3px solid #A6CBF3", outline: "none" },
        },
      }}
    >
      <input type={type} {...register(`${name}`)} />
    </Box>
  );
};

export default Input;
