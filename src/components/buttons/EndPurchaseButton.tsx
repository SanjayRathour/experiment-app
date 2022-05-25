import { Box, Button, SxProps } from "@mui/material";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postExperimentApi } from "../../api/products";
import { resetAnswers } from "../../redux/answerSlice";
import { resetMoney } from "../../redux/moneySlice";
import { resetProducts } from "../../redux/productSlice";
import { RootState } from "../../redux/store";
import LoadingBackdrop from "../LoadingBackdrop";
import PopupBackdrop from "../PopupBackdrop";

interface Props {
  sx?: SxProps;
}

const EndPurchaseButton = ({ sx }: Props) => {
  const answers = useSelector((state: RootState) => state.answers);
  const experiment = useSelector((state: RootState) => state.products);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [postExperiment, setPostExperiment] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  const dispatch = useDispatch();

  const cart = experiment.selectedProducts.map((product: any) => product.id);

  const submitExperiment = async () => {
    setLoading(true);
    const res = await postExperimentApi({
      answers: answers,
      uuid: experiment.products.uuid,
      experiment: {
        group: experiment.products.group,
        cart: cart,
        products: experiment.products.products,
      },
    });
    setLoading(false);
    dispatch(resetAnswers());
    dispatch(resetMoney());
    dispatch(resetProducts());
    setCookie("experiment", true, { path: "/" });
    navigate("/thank");
  };

  const onClick = async () => {
    try {
      setShowPopup(true);
    } catch (err) {
      console.log(err);
    }
  };
  if (postExperiment) {
    setPostExperiment(false);
    submitExperiment();
  }

  return (
    <Box>
      <PopupBackdrop
        open={showPopup}
        setOpen={setShowPopup}
        setPostExperiment={setPostExperiment}
      />
      <LoadingBackdrop open={loading} />
      <Button
        onClick={onClick}
        variant="contained"
        sx={[
          {
            width: { xs: 102, sm: 127 },
            height: { xs: 48, sm: 57 },
            fontSize: { xs: 14, sm: 20 },
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
    </Box>
  );
};

export default EndPurchaseButton;
