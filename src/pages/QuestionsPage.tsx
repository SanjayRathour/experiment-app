import { Box } from "@mui/material";
import Section from "../components/containers/Section";
import QuestionForm from "../components/QuestionForm";

const QuestionsPage = () => {
  return (
    <Box>
      <Section>
        <QuestionForm />
      </Section>
    </Box>
  );
};

export default QuestionsPage;
