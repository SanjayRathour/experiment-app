import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";

// snackbar action
const SnackbarAction = ({ setOpen }: { setOpen: Function }) => {
  return (
    <>
      <IconButton
        size="small"
        aria-label="close"
        onClick={() => {
          setOpen(false);
        }}
      >
        <CloseIcon sx={{ color: "white", fontSize: 22 }} />
      </IconButton>
    </>
  );
};
const MaterialSnackbar = ({
  open,
  setOpen,
  message,
}: {
  open: boolean;
  setOpen: Function;
  message: any;
}) => {
  return (
    <>
      <Snackbar
        sx={{
          "& .MuiPaper-root": {
            position: "fixed",
            top: "2rem",
            left: "2.5rem",
            fontSize: 20,
            width: 250,
            backgroundColor: "error.main",
          },
        }}
        open={open}
        autoHideDuration={6000}
        message={message}
        action={<SnackbarAction setOpen={setOpen} />}
      />
    </>
  );
};

export default MaterialSnackbar;
