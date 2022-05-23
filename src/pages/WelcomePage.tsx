import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Logo from "../components/Logo";
import Body1 from "../components/typography/Body1";

const WelcomePage = () => {
  return (
    <Box>
      <Container maxWidth="sm">
        <Logo />
        <Body1 text="" />
      </Container>
    </Box>
  );
};

export default WelcomePage;
