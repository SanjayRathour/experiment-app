import { Box, Typography } from "@mui/material";
import moment from "moment";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { decreaseAmount, increaseAmount } from "../redux/moneySlice";
import FlexBox from "./containers/FlexBox";

// import RemoveIcon from "@mui/icons-material/Remove";
import AddIconComponent from "./icons/AddIcon";
import RemoveIconComponent from "./icons/RemoveIcon";

const picUrl: string = "https://test-experiment-1f922.web.app/";

const Product = ({ product }: { product: any }) => {
  const [selected, setSelected] = useState<boolean>(false);
  const dispatch = useDispatch();

  const refStartDate = moment(product.refDateStart).format("DD/M/YYYY");
  const refEndDate = moment(product.refDateEnd).format("DD/M/YYYY");
  const price = product.price.toString();
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
      {/* add and remove icons */}
      {selected ? (
        <RemoveIconComponent
          onClick={() => {
            setSelected(false);
            dispatch(increaseAmount(product.price));
          }}
          sx={{ position: "absolute", left: "2px", top: "2px" }}
        />
      ) : (
        <AddIconComponent
          onClick={() => {
            setSelected(true);
            dispatch(decreaseAmount(product.price));
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
        <img src={`${picUrl}/${product.picUrl}`} height={240} />
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
            "& sup": { fontSize: 20 },
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
