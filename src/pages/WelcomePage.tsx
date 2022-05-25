import { Box } from "@mui/material";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/buttons/PrimaryButton";
import FlexBox from "../components/containers/FlexBox";
import Section from "../components/containers/Section";
import Logo from "../components/Logo";
import Body1 from "../components/typography/Body1";
import Body2 from "../components/typography/Body2";
import { agreeMessage, introduction } from "../data/welcomePage";

const WelcomePage = () => {
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
        <Logo />
        <Body1 text={introduction} sx={{ mb: 14.5 }} />
        <Body2 text={agreeMessage} sx={{ mb: "21px" }} />
        <FlexBox>
          <PrimaryButton
            text="לשאלון"
            onClick={() => {
              navigate("/questions");
            }}
          />
        </FlexBox>
      </Section>
    </Box>
  );
};

export default WelcomePage;
