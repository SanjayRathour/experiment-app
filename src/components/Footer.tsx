import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import EndPurchaseButton from "./buttons/EndPurchaseButton";
import FlexBox from "./containers/FlexBox";

const Footer = () => {
  const amount = useSelector((state: RootState) => state.money.amount);
  return (
    <FlexBox
      jc="space-around"
      sx={{
        backgroundColor: "#1579F2",
        height: 76,
        width: "100%",
        position: "fixed",
        bottom: "0px",
      }}
    >
      <FlexBox dir="column">
        <FlexBox sx={{ "& img": { mr: 2 } }}>
          <img src="/cart.png" width={37} height={27} />
          <Typography sx={{ color: "white", mx: 1 }}>לתשלום</Typography>
          <Typography sx={{ color: "white", fontSize: 30 }}>
            ₪ {(100 - amount).toFixed(2)}
          </Typography>
        </FlexBox>
        <Typography sx={{ color: "white" }}>
          נשארו בארנק עוד {amount.toFixed(2)} ₪
        </Typography>
      </FlexBox>

      <EndPurchaseButton />
    </FlexBox>
  );
};

export default Footer;
