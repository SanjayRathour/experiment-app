import { Box } from "@mui/system";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  name: string;
  register: any;
  width: string;
}

const Select = ({ children, name, register, width }: Props) => {
  return (
    <Box
      sx={{
        "& select": {
          height: 38,
          appearance: "none",
          pr: 7,
          pl: 2,
          width: { width },
          WebkitAppearance: "none",
          MozAppearance: "none",
          backgroundImage: "url('/logo/dropdown.png')",
          backgroundPosition: "right 10px top 50%",
          backgroundRepeat: "no-repeat",
          color: "black",
          cursor: "pointer",

          mb: 4,
          outline: "none",
          border: "1px solid #E0E0E0",
          borderRadius: "5px",
          "&:focus": { border: "3px solid #A6CBF3" },
        },
      }}
    >
      <select {...register(`${name}`)}>{children}</select>
    </Box>
  );
};

export default Select;
