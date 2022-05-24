import { SxProps } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FlexBox from "../containers/FlexBox";
import { MouseEventHandler } from "react";
interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  sx?: SxProps;
}
const AddIconComponent = ({ sx, onClick }: Props) => {
  return (
    <FlexBox
      props={{ onClick: onClick }}
      sx={[
        {
          width: 40,
          height: 40,
          cursor: "pointer",
          borderRadius: "50%",
          backgroundColor: "#1579F2",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <AddIcon fontSize="small" sx={{ color: "white" }} />
    </FlexBox>
  );
};

export default AddIconComponent;
