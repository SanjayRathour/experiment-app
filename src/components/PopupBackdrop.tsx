import { Backdrop, Paper } from "@mui/material";
import Popup from "./Popup";

const PopupBackdrop = ({
  open,
  setOpen,
  id,
}: {
  open: boolean;
  setOpen: Function;
  id: string;
}) => {
  return (
    <Backdrop sx={{ color: "#fff", zIndex: "2000" }} open={open}>
      <Popup />
    </Backdrop>
  );
};

export default PopupBackdrop;
