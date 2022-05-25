import { Backdrop, Button, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import FlexBox from "./containers/FlexBox";

const PopupBackdrop = ({
  open,
  setOpen,
  setPostExperiment,
}: {
  open: boolean;
  setOpen: Function;
  setPostExperiment: Function;
}) => {
  const amount = useSelector((state: RootState) => state.money.amount);

  return (
    <Backdrop sx={{ color: "#fff", zIndex: "2000" }} open={open}>
      <Paper elevation={3} sx={{ width: 350, py: 3 }}>
        <Typography sx={{ flip: "false", fontSize: 20, px: 4 }}>
          There are another {amount.toFixed(2)} NIS left in the wallet Are you
          sure That you want to complete the purchase
        </Typography>
        <FlexBox sx={{ my: 3 }}>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            sx={{
              fontSize: 20,
              backgroundColor: "#FE6366",
              color: "#000",
              mr: 3,
              px: 6,
              "&:hover": { backgroundColor: "#FE6366" },
            }}
          >
            חזור
          </Button>
          <Button
            onClick={() => {
              setPostExperiment(true);
              setOpen(false);
            }}
            sx={{
              px: 6,
              fontSize: 20,
              backgroundColor: "#83F391",
              color: "#000",
              "&:hover": { backgroundColor: "#83F391" },
            }}
          >
            שלם
          </Button>
        </FlexBox>
      </Paper>
    </Backdrop>
  );
};

export default PopupBackdrop;
