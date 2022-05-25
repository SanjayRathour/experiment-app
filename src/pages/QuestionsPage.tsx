import { Box } from "@mui/material";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Section from "../components/containers/Section";
import QuestionForm from "../components/QuestionForm";
import { resetAnswers } from "../redux/answerSlice";

const QuestionsPage = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies();
  const dispatch = useDispatch();

  useEffect(() => {
    if (cookies.experiment === "true") {
      navigate("/thank");
    }
  }, []);
  return (
    <Box>
      <Section>
        <QuestionForm />
      </Section>
    </Box>
  );
};

export default QuestionsPage;
