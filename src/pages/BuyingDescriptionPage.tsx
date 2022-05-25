import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/buttons/PrimaryButton";
import FlexBox from "../components/containers/FlexBox";
import Section from "../components/containers/Section";
import Body1 from "../components/typography/Body1";
import Body2 from "../components/typography/Body2";
import { description, selection } from "../data/buyingDescription";

const BuyingDescriptionPage = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies();

  useEffect(() => {
    if (cookies.experiment === "true") {
      navigate("/thank");
    }
  }, []);
  return (
    <Box>
      <Section>
        <Body1 text={description} sx={{ mb: "92px" }} />
        <Body2 text={selection} sx={{ mb: 12 }} />
        <FlexBox>
          <PrimaryButton
            text="להתחיל"
            onClick={() => {
              navigate("/products");
            }}
          />
        </FlexBox>
      </Section>
    </Box>
  );
};

export default BuyingDescriptionPage;
