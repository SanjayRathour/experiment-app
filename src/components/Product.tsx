import { Box, Typography } from "@mui/material";
import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseAmount, increaseAmount } from "../redux/moneySlice";
import { addToSelected, removeFromSelected } from "../redux/productSlice";
import { RootState } from "../redux/store";
import FlexBox from "./containers/FlexBox";
import ErrorSnackbar from "./ErrorSnackbar";
import AddIconComponent from "./icons/AddIcon";
import RemoveIconComponent from "./icons/RemoveIcon";

const picUrl: string = "https://test-experiment-1f922.web.app/";

const Product = ({ product }: { product: any }) => {
  const [selected, setSelected] = useState<boolean>(false);
  const dispatch = useDispatch();
  const amount = useSelector((state: RootState) => state.money.amount);
  const [amountError, setAmountError] = useState<boolean>(false);
  const refStartDate = moment(product.refDateStart).format("DD/M/YYYY");
  const refEndDate = moment(product.refDateEnd).format("DD/M/YYYY");
  const price = product.price.toFixed(2).toString();
  const priceArray = price.split(".");

  return (
    <Box
      sx={{
        width: 288,
        position: "relative",
        minHeight: 363,
        mb: 3,
        boxSizing: "border-box",
        borderRadius: "18px",
        backgroundColor: "white",
      }}
    >
      {/* when item is selected */}
      {selected && (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundColor: "#2CCE2730",
            borderRadius: "18px",
          }}
        ></Box>
      )}

      {/* show error if the amount is less than or 0 */}
      <ErrorSnackbar
        open={amountError}
        setOpen={setAmountError}
        message="לא מספיק כסף"
      />
      {/* add and remove icons */}
      {selected ? (
        <RemoveIconComponent
          onClick={() => {
            setSelected(false);
            dispatch(increaseAmount(product.price));
            dispatch(removeFromSelected(product));
          }}
          sx={{ position: "absolute", left: "2px", top: "2px" }}
        />
      ) : (
        <AddIconComponent
          onClick={() => {
            if (amount - product.price < 0) {
              setAmountError(true);
            } else {
              setSelected(true);
              dispatch(decreaseAmount(product.price));
              dispatch(addToSelected(product));
            }
          }}
          sx={{ position: "absolute", left: "2px", top: "2px" }}
        />
      )}

      {/* label only visible if there is a discount */}
      {product.saleType !== "none" && (
        <FlexBox jc="end">
          <Typography
            sx={{
              fontSize: 18,
              color: "#fff",
              px: 4,
              py: 2,
              textAlign: "center",
              backgroundColor: "#EF2222",
              borderRadius: "18px 18px 0px 18px",
            }}
          >
            בהנחה
          </Typography>
        </FlexBox>
      )}
      {/* image */}
      <FlexBox sx={{ pt: 2 }}>
        <img
          src={`${picUrl}/${product.picUrl}`}
          height={240}
          alt="product image"
        />
      </FlexBox>

      {/* description of product */}
      <Typography
        sx={{
          fontSize: 20,
          color: "black",
          textAlign: "center",
          mb: 4,
          px: 2,
          mt: 1,
        }}
      >
        {product.description}
      </Typography>

      {/* price section */}
      <FlexBox>
        <Typography
          sx={{
            fontSize: 30,
            color: "blueText",
            "& sup": { fontSize: 18 },
          }}
        >
          <span>₪</span>
          {priceArray[0]}
          <span>.</span>
          <sup>{priceArray[1]}</sup>
        </Typography>
        {/* only show old price if there is discount */}
        {product.saleType != "none" && (
          <FlexBox>
            <Typography sx={{ mx: 1, fontSize: 13, color: "black" }}>
              במקום
            </Typography>
            <Typography
              sx={{
                ml: 1,
                "& span": { mr: 1 },
                textDecoration: "line-through",
                color: "#FF0000",
              }}
            >
              <span>₪</span>
              {product.refPrice}
            </Typography>
          </FlexBox>
        )}
      </FlexBox>

      {/* different based on sale type */}
      {product.saleType === "dates" && (
        <FlexBox dir="column" sx={{ color: "blueText" }}>
          <Typography>ביחס למחיר בתאריכים</Typography>
          <Typography>
            {refStartDate} - {refEndDate}
          </Typography>
        </FlexBox>
      )}
      {product.saleType === "days" && (
        <FlexBox>
          <Typography sx={{ color: "blueText", fontSize: 17 }}>
            ביחס למחיר שהוצג במשך {product.refDays} ימים
          </Typography>
        </FlexBox>
      )}
    </Box>
  );
};

export default Product;
