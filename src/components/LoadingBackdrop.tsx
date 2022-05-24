import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingBackdrop = ({ open }: { open: boolean }) => {
  return (
    <Backdrop
      sx={{
        color: (theme) => theme.palette.primary.light,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingBackdrop;
