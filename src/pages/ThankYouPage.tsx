import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import FlexBox from "../components/containers/FlexBox";
import Section from "../components/containers/Section";
import Logo from "../components/Logo";
import Body1 from "../components/typography/Body1";
import { thankYouMessage } from "../data/thankYou";

const ThankYouPage = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies();
  useEffect(() => {
    if (cookies.experiment !== "true") {
      navigate("/");
    }
  }, []);
  return (
    <Box>
      <Section>
        <Body1 text={thankYouMessage} sx={{ textAlign: "center", mb: 6 }} />
        <Body1 text={`צוות המחקר`} sx={{ textAlign: "center" }} />
        <Body1 text={`אוניברסיטת רייכמן`} sx={{ textAlign: "center", mb: 9 }} />
        <FlexBox>
          <Logo />
        </FlexBox>
      </Section>
    </Box>
  );
};

export default ThankYouPage;
