import { Box, Button, SxProps } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postExperimentApi } from "../../api/products";
import { RootState } from "../../redux/store";
import LoadingBackdrop from "../LoadingBackdrop";

interface Props {
  sx?: SxProps;
}

const EndPurchaseButton = ({ sx }: Props) => {
  const answers = useSelector((state: RootState) => state.answers);
  const experiment = useSelector((state: RootState) => state.products);

  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const cart = experiment.selectedProducts.map((product: any) => product.id);
  const onClick = async () => {
    try {
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
      navigate("/thank");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box>
      <LoadingBackdrop open={loading} />
      <Button
        onClick={onClick}
        variant="contained"
        sx={[
          {
            width: "127px",
            height: "58px",
            fontSize: "20px",
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
